import { FastifyReply, FastifyRequest } from "fastify"
import { CreateKpiInput } from "./kpi.schema"
import KpiService from "./kpi.service"
import { errorFilter } from "../../middlewares/error-handling"
import { parse } from "path"


export async function createKpiHandler(
    request: FastifyRequest<{
        Body: CreateKpiInput
    }>,
    reply: FastifyReply
) {
    try {
        const user = request.user
        const kpi = await KpiService.createKpi(request.body, user.id)
        reply.send({
            data: kpi,
            message: "Indicator Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllKpiHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const thisYear = new Date().getFullYear().toString()
        const kpi = await KpiService.findAllKpi(request.query.year || thisYear)
        reply.send({
            data: kpi,
            message: "Indicator Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneKpiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const kpi = await KpiService.findOneKpi(request.params.id)
        reply.send({
            data: kpi,
            message: "Indicator Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findManyKpiByUserIdHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            unitId: string
        }
    }>,
    reply: FastifyReply
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
        const kpi = await KpiService.findManyByUserId(request.user.id, request.query.year, unitId)
        reply.send({
            data: kpi.kpis,
            message: "Indicator Fetched Successfully",
            status: "success",
            meta: {
                pagu: kpi.pagu
            }
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findManyRekomendedHandler(
    request: FastifyRequest<{
        Querystring: {
            year: string
            unitId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const kpi = await KpiService.findManyRekomended(request.query.year, request.query.unitId)
        reply.send({
            data: kpi,
            message: "Indicator Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateKpiHandler(
    request: FastifyRequest<{
        Body: CreateKpiInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const kpi = await KpiService.updateKpi(request.body, request.params.id)
        reply.send({
            data: kpi,
            message: "Indicator Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteKpiHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await KpiService.deleteKpi(request.params.id)
        reply.send({
            message: "Indicator Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}