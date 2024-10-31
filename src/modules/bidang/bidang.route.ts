import { FastifyInstance } from "fastify"
import { createBidangHandler, deleteBidangHandler, findAllBidangHandler, findOneBidangHandler, updateBidangHandler } from "./bidang.controller"
import { $ref } from "./bidang.schema"

async function bidangRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Bidang"],
            },
            preHandler: [server.authenticate]
        },
        findAllBidangHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Bidang"],
            },
            preHandler: [server.authenticate]
        },
        findOneBidangHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Bidang"],
                body: $ref("createBidangSchema"),
            },
            preHandler: [server.authenticate]
        },
        createBidangHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Bidang"],
                body: $ref("createBidangSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateBidangHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Bidang"],
            },
            preHandler: [server.authenticate]
        },
        deleteBidangHandler
    )
}

export default bidangRoutes;