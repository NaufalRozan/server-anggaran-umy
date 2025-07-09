import { FastifyInstance } from "fastify";
import { createSPPHandler, getAllSPPHandler, getSPPByIdHandler, getSPPFromUnitHandler, getSPPRekomendasiHandler, updateSPPOtorisasiHandler, updateSPPStatusHandler, updateStatusBiroKeuanganHandler } from "./spp.controller";
import { $ref } from "./spp.schema";

async function sppRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["SPP"],
                body: $ref("createSPPSchema"),
            },
        },
        createSPPHandler
    )

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

    server.get(
        "/recomended",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        getSPPRekomendasiHandler
    )

    server.get(
        "/:unitId/:periodeId/:sppId/:tahun",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        getSPPFromUnitHandler
    )

    server.put(
        "/:id/otorisasi",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        updateSPPOtorisasiHandler
    )
    server.put(
        "/:id/status",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        updateSPPStatusHandler
    )
    server.put(
        "/:id/statusbirokeu",
        {
            schema: {
                tags: ["SPP"],
            },
        },
        updateStatusBiroKeuanganHandler
    )

}

export default sppRoutes;