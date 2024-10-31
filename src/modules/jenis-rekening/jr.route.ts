import { FastifyInstance } from "fastify";
import { createJenisRekeningHandler, deleteJenisRekeningHandler, findAllJenisRekeningHandler, findOneJenisRekeningHandler, updateJenisRekeningHandler } from "./jr.controller";
import { $ref } from "./jr.schema";

export async function jenisRekeningRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Jenis Rekening"],
            },
            preHandler: [server.authenticate]
        },
        findAllJenisRekeningHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Jenis Rekening"],
            },
            preHandler: [server.authenticate]
        },
        findOneJenisRekeningHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Jenis Rekening"],
                body: $ref("createJRSchema"),
            },
            preHandler: [server.authenticate]
        },
        createJenisRekeningHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Jenis Rekening"],
                body: $ref("createJRSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateJenisRekeningHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Jenis Rekening"],
            },
            preHandler: [server.authenticate]
        },
        deleteJenisRekeningHandler
    )
}