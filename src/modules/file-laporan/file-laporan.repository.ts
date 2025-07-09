import path from "path";
import fs from 'fs'
import { db } from "../../config/prisma";
import { CreateFileInput } from "./file-laporan.schema";
import { MultipartFile } from "@fastify/multipart";

class FileRepository {
    static async Insert(
        fileData: MultipartFile,
        uniqueFilename: string,
        filePath: string,
        contentLength: number,
        laporanInput: string,
        creatorId?: string
    ) {
        return await db.$transaction(async (tx) => {
            try {
                return await tx.fileLaporan.create({
                    data: {
                        filename: uniqueFilename,
                        path: `/public/${uniqueFilename}`,
                        mimetype: fileData.mimetype,
                        size: contentLength,
                        originalName: fileData.filename,
                        extension: path.extname(fileData.filename).toLowerCase(),
                        laporanId: laporanInput,
                    }
                })
            } catch (error) {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath)
                }
                throw error
            }
        })
    }

    static async FindAll() {
        return db.fileLaporan.findMany({
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                id: true,
                laporanId: true,
                filename: true,
                originalName: true,
                path: true,
                mimetype: true,
                size: true,
                extension: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            }
        });
    }

    static async FindOne(id: string) {
        return db.fileLaporan.findUnique({
            where: {
                id
            },
        })
    }

    static async FindOneByName(filename: string) {
        return db.fileLaporan.findFirst({
            where: {
                filename
            }
        })
    }

    static async Delete(id: string) {
        return db.fileLaporan.delete({
            where: {
                id
            }
        })
    }

    static async Update(
        id: string,
        fileData: MultipartFile,
        uniqueFilename: string,
        filePath: string,
        contentLength: number,
    ) {
        try {
            return db.fileLaporan.update({
                where: {
                    id
                },
                data: {
                    mimetype: fileData.mimetype,
                    filename: uniqueFilename,
                    size: contentLength,
                    path: `/public/${fileData.filename}`,
                    originalName: fileData.filename,
                    extension: path.extname(fileData.filename).toLowerCase(),
                }
            })
        } catch (error) {
            throw error
        }
    }
}

export default FileRepository;