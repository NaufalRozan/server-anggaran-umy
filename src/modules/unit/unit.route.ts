import { FastifyInstance } from "fastify";
import { createUnitHandler, deleteUnitHandler, getAllUnitHandler, getUnitByIdHandler, updateUnitHandler } from "./unit.controller";
import { $ref } from "./unit.schema";

async function unitRoutes(server: FastifyInstance){
    server.get(
        '/',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        getAllUnitHandler
    )

    server.get(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        getUnitByIdHandler
    )

    server.post(
        '/',
        {
            schema: {
                tags: ['Unit'],
                body: $ref('createUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        createUnitHandler
    )

    server.put(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
                body: $ref('createUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        updateUnitHandler
    )

    server.delete(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        deleteUnitHandler
    )
}

export default unitRoutes