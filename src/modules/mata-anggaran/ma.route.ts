import { FastifyInstance } from "fastify"
import { createMaHandler, createMatoIndicatorHandler, deleteMaHandler, deleteMatoIndicatorHandler, findAllMaHandler, findManyMaByUserIdHandler, findMatoIndicatorHandler, findOneMaHandler, findOneMatoIndicatorHandler, updateMaHandler, updateMatoIndicatorHandler } from "./ma.controller"
import { $ref } from "./ma.schema"

export async function maRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Mata Anggaran"],
            },
            preHandler: [server.authenticate]
        },
        findAllMaHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Mata Anggaran"],
            },
            preHandler: [server.authenticate]
        },
        findOneMaHandler
    )

    server.get(
        "/by-user",
        {
            schema: {
                tags: ["Mata Anggaran"],
            },
            preHandler: [server.authenticate]
        },
        findManyMaByUserIdHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Mata Anggaran"],
                body: $ref("createMaSchema"),
            },
            preHandler: [server.authenticate]
        },
        createMaHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Mata Anggaran"],
                body: $ref("createMaSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateMaHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Mata Anggaran"],
            },
            preHandler: [server.authenticate]
        },
        deleteMaHandler
    )
}

export async function matoIndicatorRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Mata Anggaran to Indicator"],
                body: $ref("createMatoIndicatorSchema"),
            },
            preHandler: [server.authenticate]
        },
        createMatoIndicatorHandler
    )

    server.get(
        "/:kpiId",
        {
            schema: {
                tags: ["Mata Anggaran to Indicator"],
            },
            preHandler: [server.authenticate]
        },
        findMatoIndicatorHandler
    )

    server.get(
        "/:id/proker",
        {
            schema: {
                tags: ["Mata Anggaran to Indicator"],
            },
            preHandler: [server.authenticate]
        },
        findOneMatoIndicatorHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Mata Anggaran to Indicator"],
                body: $ref("createMatoIndicatorSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateMatoIndicatorHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Mata Anggaran to Indicator"],
            },
            preHandler: [server.authenticate]
        },
        deleteMatoIndicatorHandler
    )
}