import { FastifyInstance } from "fastify";
import { createFileHandler, deleteFileHandler, streamFileByIDHandler, findOneFileHandler, streamFileByPathHandler } from "./file.controller";

export async function fileRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["File"],
            },
        },
        createFileHandler
    );

    server.get(
        "/",
        {
            schema: {
                tags: ["File"],
            },
        },
        createFileHandler
    );

    server.get(
        "/:id",
        {
            schema: {
                tags: ["File"],
            },
        },
        findOneFileHandler
    );

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["File"],
            },
        },
        deleteFileHandler
    );
}