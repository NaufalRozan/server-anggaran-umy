import { FastifyReply, FastifyRequest } from "fastify";
import { CreateJadwalLaporanInput } from "./jl.schema";
import JadwalLaporanService from "./jl.service";
import { errorFilter } from "../../middlewares/error-handling";

export async function upsertJadwalLaporanHandler(
    request: FastifyRequest<{
        Body: CreateJadwalLaporanInput
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalLaporan = await JadwalLaporanService.upsertJadwalLaporan(request.body)
        reply.send({
            data: jadwalLaporan,
            message: "Jadwal Laporan Created Successfully",
            status: "success"
        })
    }
    catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllJadwalLaporanHandler(
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
        const jadwalLaporan = await JadwalLaporanService.findAllJadwalLaporan(request.query.id, request.query.unitId, request.query.name)
        reply.send({
            data: jadwalLaporan,
            message: "Jadwal Laporan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneJadwalLaporanHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalLaporan = await JadwalLaporanService.findJadwalLaporanById(request.params.id)
        reply.send({
            data: jadwalLaporan,
            message: "Jadwal Laporan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateJadwalLaporanHandler(
    request: FastifyRequest<{
        Body: CreateJadwalLaporanInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalLaporan = await JadwalLaporanService.updateJadwalLaporan(request.body)
        reply.send({
            data: jadwalLaporan,
            message: "Jadwal Laporan Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteJadwalLaporanHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const jadwalLaporan = await JadwalLaporanService.deleteJadwalLaporan(request.params.id)
        reply.send({
            data: jadwalLaporan,
            message: "Jadwal Laporan Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}
