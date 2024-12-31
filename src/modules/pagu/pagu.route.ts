import { FastifyInstance } from "fastify";
import { createPaguHandler, deletePaguHandler, findAllPaguHandler, findOneByJadwalPaguHandler, findOneByJadwalUnitPaguHandler, findOneByUnitPaguHandler, updatePaguHandler } from "./pagu.controller";
import { $ref } from "./pagu.schema";

export async function paguRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Pagu"],
            },
            preHandler: [server.authenticate]
        },
        findAllPaguHandler
    )

    server.get(
        "/jadwal/:jadwalId",
        {
            schema: {
                tags: ["Pagu"],
            },
            preHandler: [server.authenticate]
        },
        findOneByJadwalPaguHandler
    )

    server.get(
        "/unit/:unitId",
        {
            schema: {
                tags: ["Pagu"],
            },
            preHandler: [server.authenticate]
        },
        findOneByUnitPaguHandler
    )

    server.get(
        "/jadwal/:jadwalId/unit/:unitId",
        {
            schema: {
                tags: ["Pagu"],
            },
            preHandler: [server.authenticate]
        },
        findOneByJadwalUnitPaguHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Pagu"],
                body: $ref("createPaguSchema"),
            },
            preHandler: [server.authenticate]
        },
        createPaguHandler
    )

    server.put(
        "/:paguId",
        {
            schema: {
                tags: ["Pagu"],
                body: $ref("createPaguSchema"),
            },
            preHandler: [server.authenticate]
        },
        updatePaguHandler
    )

    server.delete(
        "/:paguId",
        {
            schema: {
                tags: ["Pagu"],
            },
            preHandler: [server.authenticate]
        },
        deletePaguHandler
    )
}