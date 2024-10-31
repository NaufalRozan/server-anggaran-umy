import { FastifyInstance } from "fastify";
import { createRoleHandler, deleteRoleHandler, getAllRolesHandler, getRoleByIdHandler, updateRoleHandler } from "./role.controller";
import { $ref } from "./role.schema";


async function roleRoutes(server: FastifyInstance){
    server.get(
        '/',
        {
            schema: {
                tags: ['Role'],
            },
            preHandler: [server.authenticate]
        },
        getAllRolesHandler
    )

    server.get(
        '/:id',
        {
            schema: {
                tags: ['Role'],
            },
            preHandler: [server.authenticate]
        },
        getRoleByIdHandler
    )

    server.post(
        '/',
        {
            schema: {
                tags: ['Role'],
                body: $ref('createRoleSchema'),
            },
            preHandler: [server.authenticate]
        },
        createRoleHandler
    )

    server.put(
        '/:id',
        {
            schema: {
                tags: ['Role'],
                body: $ref('createRoleSchema'),
            },
            preHandler: [server.authenticate]
        },
        updateRoleHandler
    )

    server.delete(
        '/:id',
        {
            schema: {
                tags: ['Role'],
            },
            preHandler: [server.authenticate]
        },
        deleteRoleHandler
    )
}

export default roleRoutes