import { FastifyInstance } from "fastify";
import { approveLaporanHandler, createLaporanHandler, deleteLaporanHandler, findAllLaporanHandler, findOneLaporanHandler, updateLaporanHandler } from "./laporan.controller";
import { $ref } from "./laporan.schema";

export async function laporanRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Laporan"],
            },
            preHandler: [server.authenticate]
        },
        findAllLaporanHandler
    )

    server.patch(
        "/:id/approve",
        {
            schema: {
                tags: ["Laporan"],
            },
            preHandler: [server.authenticate]
        },
        approveLaporanHandler
    );

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Laporan"],
                body: $ref("createLaporanSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateLaporanHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Laporan"],
            },
            preHandler: [server.authenticate]
        },
        findOneLaporanHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Laporan"],
                body: $ref("createLaporanSchema"),
            },
            preHandler: [server.authenticate]
        },
        createLaporanHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Laporan"],
            },
            preHandler: [server.authenticate]
        },
        deleteLaporanHandler
    )
}