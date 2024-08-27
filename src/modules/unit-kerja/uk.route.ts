import { FastifyInstance } from "fastify"
import { createUnitKerjaHandler, deleteUnitKerjaHandler, getAllUnitKerjaHandler, getUnitKerjaByIdHandler, updateUnitKerjaHandler } from "./uk.controller"
import { $ref } from "./uk.schema"

async function ukRoutes(server: FastifyInstance) {
    server.get(
        '/',
        {
            schema: {
                tags: ['Unit Kerja'],
            },
            preHandler: [server.authenticate]
        },
        getAllUnitKerjaHandler
    )

    server.get(
        '/:id',
        {
            schema: {
                tags: ['Unit Kerja'],
            },
            preHandler: [server.authenticate]
        },
        getUnitKerjaByIdHandler
    )

    server.post(
        '/',
        {
            schema: {
                tags: ['Unit Kerja'],
                body: $ref('createUnitKerjaSchema'),
                response: {
                    201: $ref('unitKerjaResponseSchema'),
                },
            },
            preHandler: [server.authenticate],
        },
        createUnitKerjaHandler
    )

    server.put(
        '/:id',
        {
            schema: {
                tags: ['Unit Kerja'],
                body: $ref('createUnitKerjaSchema'),
                response: {
                    200: $ref('unitKerjaResponseSchema'),
                },
            },
            preHandler: [server.authenticate]
        },
        updateUnitKerjaHandler
    )

    server.delete(
        '/:id',
        {
            schema: {
                tags: ['Unit Kerja'],
            },
            preHandler: [server.authenticate]
        },
        deleteUnitKerjaHandler
    )
}

export default ukRoutes