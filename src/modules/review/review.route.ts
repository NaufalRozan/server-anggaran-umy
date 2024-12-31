import { FastifyInstance } from "fastify"
import { createReviewHandler, deleteReviewHandler, findAllReviewHandler, findOneReviewHandler, updateReviewHandler } from "./review.controller"
import { $ref } from "./review.schema"

export async function reviewRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Review"],
            },
            preHandler: [server.authenticate]
        },
        findAllReviewHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Review"],
            },
            preHandler: [server.authenticate]
        },
        findOneReviewHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Review"],
                body: $ref("createReviewSchema"),
            },
            preHandler: [server.authenticate]
        },
        createReviewHandler
    )

    server.put(
        "/",
        {
            schema: {
                tags: ["Review"],
                body: $ref("createReviewSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateReviewHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Review"],
            },
            preHandler: [server.authenticate]
        },
        deleteReviewHandler
    )
}