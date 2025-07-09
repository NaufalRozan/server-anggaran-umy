import { FastifyReply, FastifyRequest } from "fastify"
import { errorFilter } from "../../middlewares/error-handling"
import { CreateJadwalInput } from "./jadwal.schema"
import JadwalService from "./jadwal.service"

export async function upsertJadwalHandler(
    request: FastifyRequest<{
        Body: CreateJadwalInput
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.upsertJadwal(request.body)
        reply.send({
            data: jadwal,
            message: "Jadwal Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function createJadwalHandler(
    request: FastifyRequest<{
        Body: CreateJadwalInput
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.createJadwal(request.body)
        reply.send({
            data: jadwal,
            message: "Jadwal Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllJadwalHandler(
    request: FastifyRequest<{
        Querystring: {
            id?: string,
            unitId?: string,
            name?: string,
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.findAllJadwal(request.query.id, request.query.unitId, request.query.name)
        reply.send({
            data: jadwal,
            message: "Jadwal Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneJadwalHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.findJadwalById(request.params.id)
        reply.send({
            data: jadwal,
            message: "Jadwal Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findJadwalByUnitIdYearHandler(
    request: FastifyRequest<{
        Querystring: {
            unitId: string,
            year: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.findJadwalByUnitIdYear(request.query.unitId, request.query.year)
        reply.send({
            data: jadwal,
            message: "Jadwal Fetched Successfully",
            status: "success"
        })
    }
    catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateJadwalHandler(
    request: FastifyRequest<{
        Body: CreateJadwalInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.updateJadwal(request.body)
        reply.send({
            data: jadwal,
            message: "Jadwal Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteJadwalHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwal = await JadwalService.deleteJadwal(request.params.id)
        reply.send({
            data: jadwal,
            message: "Jadwal Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}