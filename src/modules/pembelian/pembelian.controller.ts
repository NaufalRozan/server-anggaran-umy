import { FastifyReply, FastifyRequest } from "fastify"
import { CreatePembelianInput } from "./pembelian.schema"
import PembelianService from "./pembelian.service"
import { errorFilter } from "../../middlewares/error-handling"


export async function createPembelianHandler(
    request: FastifyRequest<{
        Body: CreatePembelianInput
    }>,
    reply: FastifyReply
) {
    try {
        const pembelian = await PembelianService.createPembelian(request.body)
        reply.send({
            data: pembelian,
            message: "Pembelian Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllPembelianHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const pembelian = await PembelianService.findAllPembelian()
        reply.send({
            data: pembelian,
            message: "Pembelian Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOnePembelianHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pembelian = await PembelianService.findOnePembelian(request.params.id)
        reply.send({
            data: pembelian,
            message: "Pembelian Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updatePembelianHandler(
    request: FastifyRequest<{
        Body: CreatePembelianInput
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pembelian = await PembelianService.updatePembelian(request.body, request.params.id)
        reply.send({
            data: pembelian,
            message: "Pembelian Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deletePembelianHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await PembelianService.deletePembelian(request.params.id)
        reply.send({
            message: "Pembelian Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}