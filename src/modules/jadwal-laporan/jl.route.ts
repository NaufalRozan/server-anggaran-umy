import { FastifyInstance } from "fastify";
import { $ref } from "./jl.schema";
import { deleteJadwalLaporanHandler, findAllJadwalLaporanHandler, findOneJadwalLaporanHandler, updateJadwalLaporanHandler, upsertJadwalLaporanHandler } from "./jl.controller";

export async function jadwalLaporanRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Jadwal Laporan"],
            },
        },
        findAllJadwalLaporanHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Jadwal Laporan"],
            },
        },
        findOneJadwalLaporanHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Jadwal Laporan"],
                body: $ref("createJadwalLaporanSchema"),
            },
            preHandler: [server.authenticate]
        },
        upsertJadwalLaporanHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Jadwal Laporan"],
                body: $ref("createJadwalLaporanSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateJadwalLaporanHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Jadwal Laporan"],
            },
            preHandler: [server.authenticate]
        },
        deleteJadwalLaporanHandler
    )
}