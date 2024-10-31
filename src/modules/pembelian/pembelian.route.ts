import { FastifyInstance } from "fastify";
import { createPembelianHandler, deletePembelianHandler, findAllPembelianHandler, findOnePembelianHandler, updatePembelianHandler } from "./pembelian.controller";
import { $ref } from "./pembelian.schema";

export async function pembelianRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Pembelian"],
            },
            preHandler: [server.authenticate]
        },
        findAllPembelianHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Pembelian"],
            },
            preHandler: [server.authenticate]
        },
        findOnePembelianHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Pembelian"],
                body: $ref("createPembelianSchema"),
            },
            preHandler: [server.authenticate]
        },
        createPembelianHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Pembelian"],
                body: $ref("createPembelianSchema"),
            },
            preHandler: [server.authenticate]
        },
        updatePembelianHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Pembelian"],
            },
            preHandler: [server.authenticate]
        },
        deletePembelianHandler
    )
}