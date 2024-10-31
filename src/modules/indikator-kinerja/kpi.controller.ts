import { FastifyReply, FastifyRequest } from "fastify"
import { CreateKpiInput } from "./kpi.schema"
import KpiService from "./kpi.service"
import { errorFilter } from "../../middlewares/error-handling"


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
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const kpi = await KpiService.findAllKpi()
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
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const kpi = await KpiService.findManyByUserId(request.user.id)
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