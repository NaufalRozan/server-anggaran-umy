import { FastifyInstance } from "fastify";
import { $ref } from "./entry-spj.schema";
import { createEntrySPJHandler } from "./entry-spj.controller";

export async function entrySpjRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Entry SPJ"],
                body: $ref("createEntrySPJSchema"),
            },
        },
        createEntrySPJHandler
    )
} 