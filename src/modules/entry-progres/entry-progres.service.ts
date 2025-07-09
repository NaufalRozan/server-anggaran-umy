import path from "path";
import EntryProgresRepository, { FileEntries } from "./entry-progres.repository";
import { CreateDokumenInput, CreateEntryProgresInput } from "./entry-progres.schema";
import fs from "fs";
import { FastifyRequest } from "fastify";
import { MultipartFile } from "@fastify/multipart";
import MaRepository from "../mata-anggaran/ma.repository";
import FileRepository from "../test-file/file.repository";

export enum TahapDokumen {
    Persiapan = "persiapan",
    Pelaksanaan = "pelaksanaan",
    Laporan = "Laporan",
}

class EntryProgresService {
    static async createEntryProgres(data: CreateEntryProgresInput, id: string) {
        const entryProgres = await EntryProgresRepository.Upsert(data, id)
        return entryProgres
    }


    static async createDokumen(id: string | undefined, files: MultipartFile | MultipartFile[], tahapDokumen: TahapDokumen) {
        const fileEntries: FileEntries[] = [];

        const filesArray = Array.isArray(files) ? files : [files];

        if (!id) {
            throw new Error("ID and files are required");
        }

        const proker = await MaRepository.FindOneMatoIndicator(id)
        if (!proker) {
            throw new Error("proker tidak ditemukan")
        }


        for (const file of filesArray) {
            // Process file
            const uploadDir = path.join(__dirname, `../../public/spj/progres/${tahapDokumen}`)
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true })
            }

            const clearFileName = file.filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase()
            const uniqueFilename = `${Date.now()}-${clearFileName}`
            const filePath = path.join(uploadDir, uniqueFilename)

            fs.writeFile(filePath, await file.toBuffer(), (err) => {
                if (err) {
                    throw new Error(err.message)
                }
            })

            fileEntries.push({
                filename: uniqueFilename,
                originalName: file.filename,
                path: filePath,
                mimetype: file.mimetype,
                size: file.file.bytesRead,
                extension: path.extname(file.filename).toLowerCase(),
            });
        }

        if (fileEntries.length === 0) {
            throw new Error("files are required");
        }

        switch (tahapDokumen) {
            case TahapDokumen.Persiapan:
                return EntryProgresRepository.InsertDokumenPersiapan(fileEntries, id)
            case TahapDokumen.Pelaksanaan:
                return EntryProgresRepository.InsertDokumenPelaksanaan(fileEntries, id)
            case TahapDokumen.Laporan:
                return EntryProgresRepository.InsertDokumenLaporan(fileEntries, id)
            default:
                throw new Error("Tahap dokumen tidak valid");
        }

    }

    static async getEntryProgresById(id: string) {
        return EntryProgresRepository.FindOne(id)
    }

    static async getAllEntryProgres(prokerId: string) {
        return EntryProgresRepository.FindAll(prokerId)
    }

    static async getAllEntryProgresByProkerId(prokerId: string) {
        return EntryProgresRepository.FindAllByProkerId(prokerId)
    }

    static async updateEntryProgres(id: string, data: CreateEntryProgresInput) {
        return EntryProgresRepository.Update(id, data)
    }

    static async deleteEntryProgres(id: string) {
        return EntryProgresRepository.Delete(id)
    }

    static async deleteDokumen(id: string) {
        try {
            const fileRecord = await FileRepository.FindOne(id);

            if (fileRecord) {
                await fs.promises.unlink(fileRecord.path);

                return EntryProgresRepository.DeleteDokumen(id)
            } else {
                throw new Error("File not found");
            }
        } catch (error) {
            throw new Error(`Error while deleting file: ${error}`);
        }
    }
}

export default EntryProgresService;