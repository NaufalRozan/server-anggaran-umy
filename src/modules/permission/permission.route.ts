import { FastifyInstance } from "fastify";
import { createPermissionHandler, deletePermissionHandler, getAllPermissionHandler, getPermissionByIdHandler, updatePermissionHandler } from "./permission.controller";
import { $ref } from "./permission.schema";


async function permissionRoutes(server: FastifyInstance) {
    server.get(
        '/',
        {
            schema: {
                tags: ['Permission'],
            },
            preHandler: [server.authenticate]
        },
        getAllPermissionHandler
    )

    server.get(
        '/:id',
        {
            schema: {
                tags: ['Permission'],
            },
            preHandler: [server.authenticate]
        },
        getPermissionByIdHandler
    )

    server.post(
        '/',
        {
            schema: {
                tags: ['Permission'],
                body: $ref('createPermissionSchema'),
            },
            preHandler: [server.authenticate]
        },
        createPermissionHandler
    )

    server.put(
        '/:id',
        {
            schema: {
                tags: ['Permission'],
                body: $ref('createPermissionSchema'),
            },
            preHandler: [server.authenticate]
        },
        updatePermissionHandler
    )

    server.delete(
        '/:id',
        {
            schema: {
                tags: ['Permission'],
            },
            preHandler: [server.authenticate]
        },
        deletePermissionHandler
    )
}

export default permissionRoutes