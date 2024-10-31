import { FastifyReply, FastifyRequest } from "fastify";
import { CreateJenisRekeningInput } from "./jr.schema";
import { errorFilter } from "../../middlewares/error-handling";
import JenisRekeningService from "./jr.service";

export async function createJenisRekeningHandler(
    request: FastifyRequest<{
        Body: CreateJenisRekeningInput
    }>,
    reply: FastifyReply
) {
    try {
        const jenisRekening = await JenisRekeningService.createJenisRekening(
            request.body,
            request.user.id
        )
        reply.send({
            data: jenisRekening,
            message: "Jenis Rekening Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllJenisRekeningHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const jenisRekening = await JenisRekeningService.findAllJenisRekening()
        reply.send({
            data: jenisRekening,
            message: "Jenis Rekening Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneJenisRekeningHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jenisRekening = await JenisRekeningService.findOneJenisRekening(request.params.id)
        reply.send({
            data: jenisRekening,
            message: "Jenis Rekening Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateJenisRekeningHandler(
    request: FastifyRequest<{
        Body: CreateJenisRekeningInput
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jenisRekening = await JenisRekeningService.updateJenisRekening(
            request.body,
            request.params.id
        )
        reply.send({
            data: jenisRekening,
            message: "Jenis Rekening Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteJenisRekeningHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jenisRekening = await JenisRekeningService.deleteJenisRekening(request.params.id)
        reply.send({
            data: jenisRekening,
            message: "Jenis Rekening Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}