import { FastifyReply, FastifyRequest } from "fastify"
import { CreateJadwalPencairanInput } from "./jadwal-pencairan.schema"
import JadwalPencairanService from "./jadwal-pencairan.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createJadwalPencairanHandler(
    request: FastifyRequest<{
        Body: CreateJadwalPencairanInput
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalPencairan = await JadwalPencairanService.createJadwalPencairan(request.body)
        reply.send({
            data: jadwalPencairan,
            message: "Jadwal Pencairan Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllJadwalPencairanHandler(
    request: FastifyRequest<{
        Querystring: {
            unitId?: string,
            tahun?: string,
            periode?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { tahun, unitId } = request.query
        const jadwalPencairan = await JadwalPencairanService.findAllJadwalPencairan(unitId, tahun)
        reply.send({
            data: jadwalPencairan,
            message: "Jadwal Pencairan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneJadwalPencairanHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalPencairan = await JadwalPencairanService.findJadwalPencairanById(request.params.id)
        reply.send({
            data: jadwalPencairan,
            message: "Jadwal Pencairan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findJadwalPencairanByUnitIdAndTahunHandler(
    request: FastifyRequest<{
        Querystring: {
            unitId: string,
            tahun: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalPencairan = await JadwalPencairanService.findJadwalPencairanByUnitIdAndTahun(request.query.unitId, request.query.tahun)
        reply.send({
            data: jadwalPencairan,
            message: "Jadwal Pencairan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateJadwalPencairanHandler(
    request: FastifyRequest<{
        Body: CreateJadwalPencairanInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalPencairan = await JadwalPencairanService.updateJadwalPencairan(request.params.id, request.body)
        reply.send({
            data: jadwalPencairan,
            message: "Jadwal Pencairan Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteJadwalPencairanHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await JadwalPencairanService.deleteJadwalPencairan(request.params.id)
        reply.send({
            message: "Jadwal Pencairan Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}