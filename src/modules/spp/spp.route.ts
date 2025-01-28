import { FastifyInstance } from "fastify";
import { getAllSPPHandler, getSPPByIdHandler, updateSPPHandler } from "./spp.controller";
import { $ref } from "./spp.schema";

async function sppRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        getAllSPPHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        getSPPByIdHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["SPP"],
                body: $ref("createSPPSchema"),
            },
        },
        updateSPPHandler
    )
}

export default sppRoutes;