import { FastifyReply, FastifyRequest } from "fastify"
import { CreateManyRekeningInput, CreateRekeningInput } from "./rekening.schema"
import RekeningService from "./rekening.service"
import { errorFilter } from "../../middlewares/error-handling"


export async function createRekeningHandler(
    request: FastifyRequest<{
        Body: CreateRekeningInput
    }>,
    reply: FastifyReply
) {
    try {
        const rekening = await RekeningService.createRekening(
            request.body,
            request.user.id
        )
        reply.send({
            data: rekening,
            message: "Rekening Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function createManyRekeningHandler(
    request: FastifyRequest<{
        Body: CreateManyRekeningInput
    }>,
    reply: FastifyReply
) {
    try {
        const rekening = await RekeningService.createManyRekening(request.body)
        reply.send({
            data: rekening,
            message: "Rekening Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllRekeningHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const rekening = await RekeningService.findAllRekening()
        reply.send({
            data: rekening,
            message: "Rekening Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneRekeningHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const rekening = await RekeningService.findOneRekening(request.params.id)
        reply.send({
            data: rekening,
            message: "Rekening Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findManyByUserIdHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const rekening = await RekeningService.findManyByUserId(request.user.id)
        reply.send({
            data: rekening,
            message: "Rekening Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateRekeningHandler(
    request: FastifyRequest<{
        Body: CreateRekeningInput
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const rekening = await RekeningService.updateRekening(
            request.body,
            request.params.id
        )
        reply.send({
            data: rekening,
            message: "Rekening Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteRekeningHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await RekeningService.deleteRekening(request.params.id)
        reply.send({
            message: "Rekening Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}