import { FastifyInstance } from "fastify";
import { createVisiMisiHandler, deleteVisiMisiHandler, findAllVisiMisiHandler, findManyByUserIdHandler, findOneVisiMisiHandler, updateVisiMisiHandler } from "./vm.controller";
import { $ref } from "./vm.schema";

async function vmRoutes(server: FastifyInstance) {
    server.get(
        "/",
        {
            schema: {
                tags: ["Visi Misi"],
            },
            preHandler: [server.authenticate]
        },
        findAllVisiMisiHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Visi Misi"],
            },
            preHandler: [server.authenticate]
        },
        findOneVisiMisiHandler
    )

    server.get(
        "/by-user",
        {
            schema: {
                tags: ["Visi Misi"],
            },
            preHandler: [server.authenticate]
        },
        findManyByUserIdHandler
    )

    server.post(
        "/",
        {
            schema: {
                tags: ["Visi Misi"],
                body: $ref("createVmSchema"),
            },
            preHandler: [server.authenticate]
        },
        createVisiMisiHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Visi Misi"],
                body: $ref("createVmSchema"),
            },
            preHandler: [server.authenticate]
        },
        updateVisiMisiHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Visi Misi"],
            },
            preHandler: [server.authenticate]
        },
        deleteVisiMisiHandler
    )
}

export default vmRoutes