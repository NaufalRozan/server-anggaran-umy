import { FastifyInstance } from "fastify"
import { createKpiHandler, deleteKpiHandler, findAllKpiHandler, findManyKpiByUserIdHandler, findManyRekomendedHandler, findOneKpiHandler, updateKpiHandler } from "./kpi.controller"
import { $ref } from "./kpi.schema"


async function kpiRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Indicator"],
            },
            preHandler: [server.authenticate]
        },
        findAllKpiHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Indicator"],
            },
            preHandler: [server.authenticate]
        },
        findOneKpiHandler
    )

    server.get(
        "/by-user",
        {
            schema: {
                tags: ["Indicator"],
            },
            preHandler: [server.authenticate]
        },
        findManyKpiByUserIdHandler
    )

    server.get(
        "/recomended",
        {
            schema: {
                tags: ["Indicator"],
            },
            preHandler: [server.authenticate]
        },
        findManyRekomendedHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Indicator"],
                body: $ref("createKpiSchema"),
            },
            preHandler: [server.authenticate]
        },
        createKpiHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Indicator"],
                body: $ref("createKpiSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateKpiHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Indicator"],
            },
            preHandler: [server.authenticate]
        },
        deleteKpiHandler
    )
}

export default kpiRoutes