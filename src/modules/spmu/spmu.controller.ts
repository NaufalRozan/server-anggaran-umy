import { FastifyReply, FastifyRequest } from "fastify"
import SPMUService from "./spmu.service"
import { errorFilter } from "../../middlewares/error-handling"
import { CreateSPMUInput } from "./spmu.schema"


export async function createSPMUHandler(
    request: FastifyRequest<{
        Body: CreateSPMUInput
    }>,
    reply: FastifyReply,
) {
    try {
        const spp = await SPMUService.createSPMU(request.body)

        reply.send({
            data: spp,
            message: "SPMU Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllSPMUHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            unitId: string
            periode: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        if (request.query.year === "none") {
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
        const spp = await SPMUService.getAllSPMU(request.query.year, unitId, request.query.periode)

        reply.send({
            data: spp,
            message: "List of spp",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getRecomendedSPMUHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            unitId: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const spp = await SPMUService.getRecomendedSPMU(request.query.year, request.query.unitId)

        reply.send({
            data: spp,
            message: "List of spp",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateSPMUOtorisasiBiroHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const spp = await SPMUService.updateSPMUOtorisasiBiro(request.params.id)

        reply.send({
            data: spp,
            message: "SPMU Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateSPMUOtorisasiWR2Handler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const spp = await SPMUService.updateSPMUOtorisasiWR2(request.params.id)

        reply.send({
            data: spp,
            message: "SPMU Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}