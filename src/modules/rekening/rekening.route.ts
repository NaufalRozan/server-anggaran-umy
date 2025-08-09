import { FastifyInstance } from "fastify";
import { createManyRekeningHandler, createRekeningHandler, deleteRekeningHandler, findAllRekeningHandler, findManyByUserIdHandler, findOneRekeningHandler, updateRekeningHandler } from "./rekening.controller";
import { $ref } from "./rekening.schema";


export async function rekeningRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Rekening"],
            },
            preHandler: [server.authenticate]
        },
        findAllRekeningHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Rekening"],
            },
            preHandler: [server.authenticate]
        },
        findOneRekeningHandler
    )

    server.get(
        "/by-user",
        {
            schema: {
                tags: ["Rekening"],
            },
            preHandler: [server.authenticate]
        },
        findManyByUserIdHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Rekening"],
                body: $ref("createRekeningSchema"),
            },
            preHandler: [server.authenticate]
        },
        createRekeningHandler
    )

    server.post(
        "/many",
        {
            schema: {
                tags: ["Rekening"],
                body: $ref("createManyRekeningSchema"),
            },
            // preHandler: [server.authenticate]
        },
        createManyRekeningHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Rekening"],
                body: $ref("createRekeningSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateRekeningHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Rekening"],
            },
            preHandler: [server.authenticate]
        },
        deleteRekeningHandler
    )
} 