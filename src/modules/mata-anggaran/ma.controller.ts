import { FastifyReply, FastifyRequest } from "fastify"
import { CreateMaInput, CreateMatoIndicatorInput } from "./ma.schema"
import MaService from "./ma.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createMaHandler(
    request: FastifyRequest<{
        Body: CreateMaInput
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.createMa(request.body, request.user.id)
        reply.send({
            data: ma,
            message: "MA Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllMaHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            indicatorId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const indicatorId = request.query.indicatorId === "all" ? undefined : request.query.indicatorId
        const ma = await MaService.findAllMa(
            request.query.year,
            indicatorId
        )
        reply.send({
            data: ma,
            message: "MA Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneMaHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.findOneMa(request.params.id)
        reply.send({
            data: ma,
            message: "MA Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findManyMaByUserIdHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.findManyByUserId(request.user.id)
        reply.send({
            data: ma,
            message: "MA Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateMaHandler(
    request: FastifyRequest<{
        Body: CreateMaInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.updateMa(request.body, request.params.id)
        reply.send({
            data: ma,
            message: "MA Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteMaHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await MaService.deleteMa(request.params.id)
        reply.send({
            message: "MA Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function createMatoIndicatorHandler(
    request: FastifyRequest<{
        Body: CreateMatoIndicatorInput
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.createMatoIndicator(request.body)
        reply.send({
            data: ma,
            message: "MA to Indicator Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findMatoIndicatorHandler(
    request: FastifyRequest<{
        Params: {
            kpiId: string,
            unitId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.findMatoIndicator(request.params.kpiId, request.params.unitId)
        reply.send({
            data: ma.proker,
            message: "MA to Indicator Fetched Successfully",
            status: "success",
            meta: {
                kpi: ma.kpi,
                pagu: ma.pagu
            }
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneMatoIndicatorHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.findOneMatoIndicator(request.params.id)
        reply.send({
            data: ma.proker,
            message: "MA to Indicator Fetched Successfully",
            status: "success",
            meta: {
                kpi: ma.kpi,
                ma: ma.ma,
                pagu: ma.pagu
            }
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateMatoIndicatorHandler(
    request: FastifyRequest<{
        Body: CreateMatoIndicatorInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const ma = await MaService.updateMatoIndicator(request.body, request.params.id)
        reply.send({
            data: ma,
            message: "MA to Indicator Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteMatoIndicatorHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await MaService.deleteMatoIndicator(request.params.id)
        reply.send({
            message: "MA to Indicator Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}