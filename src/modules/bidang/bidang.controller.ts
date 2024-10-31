import { FastifyReply, FastifyRequest } from "fastify"
import { CreateBidangInput } from "./bidang.schema"
import BidangService from "./bidang.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createBidangHandler(
    request: FastifyRequest<{
        Body: CreateBidangInput
    }>,
    reply: FastifyReply
) {
    try {
        const bidang = await BidangService.createBidang(request.body)
        reply.send({
            data: bidang,
            message: "Bidang Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllBidangHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const bidang = await BidangService.findAllBidang()
        reply.send({
            data: bidang,
            message: "Bidang Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneBidangHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const bidang = await BidangService.findOneBidang(request.params.id)
        reply.send({
            data: bidang,
            message: "Bidang Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateBidangHandler(
    request: FastifyRequest<{
        Body: CreateBidangInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const bidang = await BidangService.updateBidang(request.body, request.params.id)
        reply.send({
            data: bidang,
            message: "Bidang Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteBidangHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await BidangService.deleteBidang(request.params.id)
        reply.send({
            message: "Bidang Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}