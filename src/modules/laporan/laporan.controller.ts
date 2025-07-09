import { FastifyReply, FastifyRequest } from "fastify";
import { CreateLaporanInput } from "./laporan.schema";
import LaporanService from "./laporan.service";
import { errorFilter } from "../../middlewares/error-handling";

export async function createLaporanHandler(
    request: FastifyRequest<{
        Body: CreateLaporanInput
    }>,
    reply: FastifyReply
) {
    try {
        const laporan = await LaporanService.createLaporan(request.body)
        reply.send({
            data: laporan,
            message: "Laporan Created Successfully",
            status: "success"

        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function approveLaporanHandler(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
) {
    try {
        const laporan = await LaporanService.approveLaporan(request.params.id);
        reply.send({
            data: laporan,
            message: "Laporan Approved Successfully",
            status: "success"
        });
    } catch (error) {
        errorFilter(error, reply);
    }
}


export async function updateLaporanHandler(
    request: FastifyRequest<{
        Body: CreateLaporanInput
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const laporan = await LaporanService.updateLaporan(
            request.body,
            request.params.id
        )
        reply.send({
            data: laporan,
            message: "Laporan Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllLaporanHandler(
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
        const laporan = await LaporanService.findAllLaporan(
            request.query.year,
            indicatorId
        )
        reply.send({
            data: laporan,
            message: "Laporan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneLaporanHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const laporan = await LaporanService.findOneLaporan(request.params.id)
        reply.send({
            data: laporan,
            message: "Laporan Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteLaporanHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await LaporanService.deleteLaporan(request.params.id)
        reply.send({
            message: "Laporan Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

