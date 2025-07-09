import { FastifyInstance } from "fastify"
import { upsertJadwalHandler, deleteJadwalHandler, findAllJadwalHandler, findOneJadwalHandler, updateJadwalHandler, findJadwalByUnitIdYearHandler } from "./jadwal.controller"
import { $ref } from "./jadwal.schema"

export async function jadwalRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Jadwal"],
            },
            preHandler: [server.authenticate]
        },
        findAllJadwalHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Jadwal"],
            },
            preHandler: [server.authenticate]
        },
        findOneJadwalHandler
    )

    server.get(
        "/unit/:unitId/year/:year",
        {
            schema: {
                tags: ["Jadwal"],
            },
            preHandler: [server.authenticate]
        },
        findJadwalByUnitIdYearHandler
    )


    server.post(
        "/",
        {
            schema: {
                tags: ["Jadwal"],
                body: $ref("createJadwalSchema"),
            },
            preHandler: [server.authenticate]
        },
        upsertJadwalHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Jadwal"],
                body: $ref("createJadwalSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateJadwalHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Jadwal"],
            },
            preHandler: [server.authenticate]
        },
        deleteJadwalHandler
    )
}