import { FastifyInstance } from "fastify"
import { createReviewProgramHandler, deleteReviewProgramHandler, findAllReviewProgramHandler, findOneReviewProgramHandler, updateReviewProgramHandler } from "./rp.controller"
import { $ref } from "./rp.schema"

export async function reviewProgramRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Review Program"],
            },
        },
        findAllReviewProgramHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Review Program"],
            },
        },
        findOneReviewProgramHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Review Program"],
                body: $ref("createReviewProgramSchema"),
            },
        },
        createReviewProgramHandler
    )

    server.put(
        "/",
        {
            schema: {
                tags: ["Review Program"],
                body: $ref("createReviewProgramSchema"),
            },
        },
        updateReviewProgramHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Review Program"],
            },
        },
        deleteReviewProgramHandler
    )
}