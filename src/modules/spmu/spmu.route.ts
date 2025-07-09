import { FastifyInstance } from "fastify";
import { createSPMUHandler, getAllSPMUHandler, getRecomendedSPMUHandler, updateSPMUOtorisasiBiroHandler, updateSPMUOtorisasiWR2Handler } from "./spmu.controller";
import { $ref } from "./spmu.schema";

async function spmuRoutes(server: FastifyInstance) {

    server.post(
        "/",
        {
            schema: {
                tags: ["SPP"],
                body: $ref("createSPMUSchema"),
            },
        },
        createSPMUHandler
    )

    server.get(
        "/",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        getAllSPMUHandler
    )

    server.get(
        "/recomended",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        getRecomendedSPMUHandler
    )

    server.put(
        "/:id/otorisasibiro",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        updateSPMUOtorisasiBiroHandler
    )

    server.put(
        "/:id/otorisasiwr2",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        updateSPMUOtorisasiWR2Handler
    )
}

export default spmuRoutes;