import { FastifyReply, FastifyRequest } from "fastify"
import { CreateFileInput } from "./file.schema"
import { errorFilter } from "../../middlewares/error-handling"
import FileService from "./file.service"
import path from "path"
import fs from "fs"
import { MultipartFile, MultipartValue } from "@fastify/multipart"
import { pipeline } from "stream";
import util from 'util'
const pump = util.promisify(pipeline)

// 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024

export async function createFileHandler(
    request: FastifyRequest<{
        Body: CreateFileInput
    }>,
    reply: FastifyReply,
) {
    try {
        const body = request.body
        const contentLength = body.file.file.bytesRead

        if (!body.file) {
            return reply.status(400).send({
                message: "No file uploaded",
                status: "error",
            });
        }

        if (contentLength > MAX_FILE_SIZE) {
            return reply.status(400).send({
                message: "File size too large",
                status: "error",
            });
        }

        const file = await FileService.createFile(
            body.file,
            contentLength,
        )

        reply.send({
            data: file,
            message: "File Uploaded Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllFileHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    try {
        const files = await FileService.findAllFile()

        reply.send({
            data: files,
            message: "List of files",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneFileHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params as { id: string }

        const file = await FileService.findOneFile(id)

        reply.send({
            data: file,
            message: "File found",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteFileHandler(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params as { id: string }

        await FileService.deleteFile(id)

        reply.send({
            message: "File deleted successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function streamFileByIDHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params

        const { file, filePath } = await FileService.streamFileByID(id)

        reply
            .header("Content-Type", file.mimetype)
            .header("Content-Disposition", `inline; filename="${file.originalName}"`)

        return reply.send(fs.createReadStream(filePath));
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function streamFileByPathHandler(
    request: FastifyRequest<{
        Params: {
            filename: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const filename = request.params.filename

        const {
            file,
            filePath
        } = await FileService.streamFileByPath(filename)

        reply
            .header("Content-Type", file.mimetype)
            .header("Content-Disposition", `inline; filename="${file.originalName}"`)

        return reply.send(fs.createReadStream(filePath));
    } catch (error) {
        errorFilter(error, reply)
    }
}