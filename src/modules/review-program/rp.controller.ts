import { FastifyReply, FastifyRequest } from "fastify"
import { CreateReviewProgramInput } from "./rp.schema"
import ReviewProgramService from "./rp.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createReviewProgramHandler(
    request: FastifyRequest<{
        Body: CreateReviewProgramInput
    }>,
    reply: FastifyReply
) {
    try {
        const reviewProgram = await ReviewProgramService.createReviewProgram(request.body)
        reply.send({
            data: reviewProgram,
            message: "Review Program Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllReviewProgramHandler(
    request: FastifyRequest<{
        Querystring: {
            prokerId?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const reviewPrograms = await ReviewProgramService.findAllReviewProgram(request.query.prokerId)
        reply.send({
            data: reviewPrograms,
            message: "Review Programs Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneReviewProgramHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const reviewProgram = await ReviewProgramService.findReviewProgramById(request.params.id)
        reply.send({
            data: reviewProgram,
            message: "Review Program Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateReviewProgramHandler(
    request: FastifyRequest<{
        Querystring: {
            id: string
        },
        Body: CreateReviewProgramInput
    }>,
    reply: FastifyReply
) {
    try {
        const reviewProgram = await ReviewProgramService.upsertReviewProgram(request.query.id, request.body)
        reply.send({
            data: reviewProgram,
            message: "Review Program Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteReviewProgramHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await ReviewProgramService.deleteReviewProgram(request.params.id)
        reply.send({
            message: "Review Program Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}