import { FastifyReply, FastifyRequest } from "fastify"
import SPPService from "./spp.service"
import { errorFilter } from "../../middlewares/error-handling"
import { CreateSPPInput } from "./spp.schema"

export async function getAllSPPHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            unitId: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        if (request.query.year==="none"){
            reply.send({
                data: [],
                message: "Indicator Fetched Successfully",
                status: "success",
                meta: {
                    pagu: {}
                }
            })
        }
        const unitId = request.query.unitId === "all" ? undefined : request.query.unitId
        const spp = await SPPService.getAllSPP()

        reply.send({
            data: spp,
            message: "List of spp",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getSPPByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params

        const spp = await SPPService.getSPPById(id)

        reply.send({
            data: spp,
            message: "SPP found",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateSPPHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
        Body: CreateSPPInput
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params
        const sppData = request.body

        const spp = await SPPService.updateSPP(sppData, id)

        reply.send({
            data: spp,
            message: "SPP updated",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}