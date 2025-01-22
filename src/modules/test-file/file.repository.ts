import path from "path";
import fs from 'fs'
import { db } from "../../config/prisma";
import { CreateFileInput } from "./file.schema";

class FileRepository {
    static async Insert(
        fileData: CreateFileInput,
        uniqueFilename: string,
        filePath: string,
        contentLength: number,
        creatorId?: string
    ) {
        return await db.$transaction(async (tx) => {
            try {
                return await tx.file.create({
                    data: {
                        filename: uniqueFilename,
                        path: `/public/${uniqueFilename}`,
                        mimetype: fileData.mimetype,
                        size: contentLength,
                        originalName: fileData.filename,
                        extension: path.extname(fileData.filename).toLowerCase(),
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
        return db.file.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });
    }

    static async FindOne(id: string) {
        return db.file.findUnique({
            where: {
                id
            },
        })
    }

    static async FindOneByName(filename: string) {
        return db.file.findFirst({
            where: {
                filename
            }
        })
    }

    static async Delete(id: string) {
        return db.file.delete({
            where: {
                id
            }
        })
    }

    static async Update(
        id: string,
        fileData: CreateFileInput,
        uniqueFilename: string,
        filePath: string,
        contentLength: number,
    ) {
        try {
            return db.file.update({
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