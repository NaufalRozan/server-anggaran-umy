import { FastifyInstance } from "fastify"
import { createJadwalPencairanHandler, deleteJadwalPencairanHandler, findAllJadwalPencairanHandler, findJadwalPencairanByUnitIdAndTahunHandler, findOneJadwalPencairanHandler, updateJadwalPencairanHandler } from "./jadwal-pencairan.controller"
import { $ref } from "./jadwal-pencairan.schema"

export async function jadwalPencairanRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Jadwal Pencairan"],
            },
            preHandler: [server.authenticate]
        },
        findAllJadwalPencairanHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Jadwal Pencairan"],
            },
            preHandler: [server.authenticate]
        },
        findOneJadwalPencairanHandler
    )

    server.get(
        "/:unitId/:tahun",
        {
            schema: {
                tags: ["Jadwal Pencairan"],
            },
            preHandler: [server.authenticate]
        },
        findJadwalPencairanByUnitIdAndTahunHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Jadwal Pencairan"],
                body: $ref("createJadwalPencairanSchema"),
            },
            preHandler: [server.authenticate]
        },
        createJadwalPencairanHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Jadwal Pencairan"],
                body: $ref("createJadwalPencairanSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateJadwalPencairanHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Jadwal Pencairan"],
            },
            preHandler: [server.authenticate]
        },
        deleteJadwalPencairanHandler
    )
}