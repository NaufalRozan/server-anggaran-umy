import path from "path";
import fs from 'fs'
import FileRepository from "./file.repository";
import { MultipartFile } from "@fastify/multipart";

class FileService {
    static async createFile(
        fileData: MultipartFile,
        contentLength: number,
        creatorId?: string
    ) {
        //lokasi upload
        const uploadDir = path.join(__dirname, '../../public')
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true })
        }

        const clearFileName = fileData.filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase()
        const uniqueFilename = `${Date.now()}-${clearFileName}`
        const filePath = path.join(uploadDir, uniqueFilename)

        fs.writeFile(filePath, await fileData.toBuffer(), (err) => {
            if (err) {
                throw new Error(err.message)
            }
        })

        // const file = FileRepository.Insert(
        //     fileData,
        //     uniqueFilename,
        //     filePath,
        //     contentLength,
        //     creatorId ?? undefined
        // )

        return 
    }

    static async findAllFile() {
        return FileRepository.FindAll()
    }

    static async findOneFile(id: string) {
        return FileRepository.FindOne(id)
    }

    static async deleteFile(id: string) {
        try {
            const fileRecord = await FileRepository.FindOne(id);
    
            if (fileRecord) {
                const filePath = path.join(__dirname, '../../public', fileRecord.filename);
    
                await fs.promises.unlink(filePath);
    
                await FileRepository.Delete(id);
            } else {
                throw new Error("File not found");
            }
        } catch (error) {
            throw new Error(`Error while deleting file: ${error}`);
        }
    }

    static async updateFile(
        id: string,
        fileData: MultipartFile,
        contentLength: number
    ) {
        const fileRecord = await FileRepository.FindOne(id);

        if (!fileRecord) {
            throw new Error("File not found");
        }

        const clearFileName = fileData.filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase()
        const uniqueFilename = `${Date.now()}-${clearFileName}`
        const filePath = path.join(__dirname, '../../public', fileRecord.filename);

        fs.writeFile(filePath, await fileData.toBuffer(), (err) => {
            if (err) {
                throw new Error(err.message)
            }
        })

        return FileRepository.Update(
            id,
            fileData,
            uniqueFilename,
            filePath,
            contentLength
        )
    }
    
    static async streamFileByID(
        id: string
    ) {
        const file = await FileRepository.FindOne(id)

        if (!file) {
            throw new Error('File not found')
        }

        const filePath = path.join(__dirname, '../../public', file.filename)

        return {
            file,
            filePath
        }
    }

    static async streamFileByPath(
        filename: string
    ) {
        const file = await FileRepository.FindOneByName(filename)

        if (!file) {
            throw new Error('File not found')
        }

        return {
            file,
        }
    }
}

export default FileService;