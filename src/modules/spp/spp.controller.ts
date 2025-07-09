import { FastifyReply, FastifyRequest } from "fastify"
import SPPService from "./spp.service"
import { errorFilter } from "../../middlewares/error-handling"
import { CreateSPPInput } from "./spp.schema"

export async function createSPPHandler(
    request: FastifyRequest<{
        Body: CreateSPPInput
    }>,
    reply: FastifyReply,
) {
    try {
        const spp = await SPPService.createSPP(request.body)

        reply.send({
            data: spp,
            message: "SPP Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllSPPHandler(
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
        const spp = await SPPService.getAllSPP(request.query.year, unitId, request.query.periode)

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

export async function getSPPRekomendasiHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            unitId: string
            periodeId: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const spp = await SPPService.getSPPRekomendasi(request.query.year, request.query.unitId, request.query.periodeId)

        reply.send({
            data: spp,
            message: "SPP found",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getSPPFromUnitHandler(
    request: FastifyRequest<{
        Params: {
            unitId: string
            periodeId: string
            sppId: string
            tahun: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const spp = await SPPService.getSPPFromUnit(request.params.unitId, request.params.periodeId, request.params.sppId, request.params.tahun)

        reply.send({
            data: spp,
            message: "SPP found",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateSPPOtorisasiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params

        const spp = await SPPService.updateSPPOtorisasi(id)

        reply.send({
            data: spp,
            message: "SPP updated",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}
export async function updateSPPStatusHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params

        const spp = await SPPService.updateSPPStatus(id)

        reply.send({
            data: spp,
            message: "SPP updated",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateStatusBiroKeuanganHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
    }>,
    reply: FastifyReply,
) {
    try {
        const { id } = request.params

        const spp = await SPPService.updateStatusBiroKeuangan(id)

        reply.send({
            data: spp,
            message: "SPP updated",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}