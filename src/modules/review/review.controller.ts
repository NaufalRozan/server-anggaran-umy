import { FastifyReply, FastifyRequest } from "fastify"
import { errorFilter } from "../../middlewares/error-handling"
import ReviewService from "./review.service"
import { CreateReviewInput } from "./review.schema"

export async function createReviewHandler(
    request: FastifyRequest<{
        Body: CreateReviewInput
    }>,
    reply: FastifyReply
) {
    try {
        const review = await ReviewService.createReview(request.body)
        reply.send({
            data: review,
            message: "Review Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllReviewHandler(
    request: FastifyRequest<{
        Querystring: {
            jadwalId: string
            unitId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const unitId = request.query.unitId === "all" ? undefined : request.query.unitId
        const reviews = await ReviewService.findOneReviewByTahunAndUnitId(request.query.jadwalId, unitId)
        reply.send({
            data: reviews,
            message: "Reviews Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneReviewHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const review = await ReviewService.findReviewById(request.params.id)
        reply.send({
            data: review,
            message: "Review Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateReviewHandler(
    request: FastifyRequest<{
        Querystring: {
            id: string
        },
        Body: CreateReviewInput
    }>,
    reply: FastifyReply
) {
    try {
        const review = await ReviewService.updateReview(request.query.id, request.body)
        reply.send({
            data: review,
            message: "Review Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteReviewHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await ReviewService.deleteReview(request.params.id)
        reply.send({
            message: "Review Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}