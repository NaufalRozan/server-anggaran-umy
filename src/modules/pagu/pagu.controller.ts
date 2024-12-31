import { FastifyReply, FastifyRequest } from "fastify"
import { CreatePaguInput } from "./pagu.schema"
import PaguService from "./pagu.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createPaguHandler(
    request: FastifyRequest<{
        Body: CreatePaguInput
    }>,
    reply: FastifyReply
) {
    try {
        const pagu = await PaguService.createPagu(request.body)
        reply.send({
            data: pagu,
            message: "Pagu Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllPaguHandler(
    request: FastifyRequest<{
        Querystring: {
            tahun?: string,
            unitId?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pagu = await PaguService.findAllPagu(request.query.tahun)
        reply.send({
            data: pagu,
            message: "Pagu Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneByJadwalPaguHandler(
    request: FastifyRequest<{
        Params: {
            jadwalId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pagu = await PaguService.findByJadwalId(request.params.jadwalId)
        reply.send({
            data: pagu,
            message: "Pagu Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneByUnitPaguHandler(
    request: FastifyRequest<{
        Params: {
            unitId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pagu = await PaguService.findByUnitId(request.params.unitId)
        reply.send({
            data: pagu,
            message: "Pagu Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneByJadwalUnitPaguHandler(
    request: FastifyRequest<{
        Params: {
            jadwalId: string,
            unitId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pagu = await PaguService.findByJadwalIdAndUnitId(request.params.jadwalId, request.params.unitId)
        reply.send({
            data: pagu,
            message: "Pagu Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updatePaguHandler(
    request: FastifyRequest<{
        Params: {
            paguId: string
        },
        Body: {
            pagu: number
        }
    }>,
    reply: FastifyReply
) {
    try {
        const pagu = await PaguService.updatePagu(request.params.paguId, request.body.pagu)
        reply.send({
            data: pagu,
            message: "Pagu Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deletePaguHandler(
    request: FastifyRequest<{
        Params: {
            paguId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await PaguService.deletePagu(request.params.paguId)
        reply.send({
            message: "Pagu Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}