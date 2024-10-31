import { FastifyReply, FastifyRequest } from "fastify"
import { CreateVmInput } from "./vm.schema"
import VmService from "./vm.service"
import { errorFilter } from "../../middlewares/error-handling"


export async function createVisiMisiHandler(
    request: FastifyRequest<{
        Body: CreateVmInput
    }>,
    reply: FastifyReply
) {
    try {
        const visiMisiData = request.body
        const creatorId = request.user?.id
        const visiMisi = await VmService.createVisiMisi(visiMisiData, creatorId)
        reply.code(201).send({
            data: visiMisi,
            message: "Visi Misi Added Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllVisiMisiHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const user = request.user
        const visiMisi = await VmService.findAllVisiMisi(user.id)
        reply.send({
            data: visiMisi,
            message: "Visi Misi Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneVisiMisiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const visiMisi = await VmService.findOneVisiMisi(request.params.id)
        reply.send({
            data: visiMisi,
            message: "Visi Misi Fetched Successfully",
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
        const visiMisi = await VmService.findManyByUserId(request.user.id)
        reply.send({
            data: visiMisi,
            message: "Visi Misi Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateVisiMisiHandler(
    request: FastifyRequest<{
        Body: CreateVmInput
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const visiMisiData = request.body
        const visiMisi = await VmService.updateVisiMisi(visiMisiData, request.params.id)
        reply.send({
            data: visiMisi,
            message: "Visi Misi Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteVisiMisiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const visiMisi = await VmService.deleteVisiMisi(request.params.id)
        reply.send({
            data: visiMisi,
            message: "Visi Misi Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}