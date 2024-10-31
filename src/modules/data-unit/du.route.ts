import { FastifyInstance } from "fastify";
import { createDataUnitHandler, deleteDataUnitHandler, findAllDataUnitHandler, findOneDataUnitHandler, updateDataUnitHandler } from "./du.controller";
import { $ref } from "./du.schema";


async function dataUnitRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Data Unit"],
            },
            preHandler: [server.authenticate]
        },
        findAllDataUnitHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Data Unit"],
            },
            preHandler: [server.authenticate]
        },
        findOneDataUnitHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Data Unit"],
                body: $ref("createDataUnitSchema"),
            },
            preHandler: [server.authenticate]
        },
        createDataUnitHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Data Unit"],
                body: $ref("createDataUnitSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateDataUnitHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Data Unit"],
            },
            preHandler: [server.authenticate]
        },
        deleteDataUnitHandler
    )
}

export default dataUnitRoutes