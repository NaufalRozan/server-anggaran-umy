import { FastifyInstance } from "fastify";
import { createDokumenHandle, createEntryProgresHandler, deleteDokumenHandler, deleteEntryProgresHandler, getAllEntryProgresHandler, getEntryProgresByIdHandler, updateEntryProgresHandler } from "./entry-progres.controller";
import { $ref } from "./entry-progres.schema";

export async function entryProgresRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            schema: {
                tags: ["Entry Progres"],
                body: $ref("createEntryProgresSchema"),
            },
        },
        createEntryProgresHandler
    )

    server.post(
        "/dokumen/:tahap",
        {
            schema: {
                tags: ["Entry Progres"],
                body: $ref("createDokumenSchema"),
            },
        },
        createDokumenHandle
    )

    server.get(
        "/",
        {
            schema: {
                tags: ["Entry Progres"],
            },
        },
        getAllEntryProgresHandler
    )

    server.get(
        "/:id",
        {
            schema: {
                tags: ["Entry Progres"],
            },
        },
        getEntryProgresByIdHandler
    )

    server.get(
        "/proker/:prokerId",
        {
            schema: {
                tags: ["Entry Progres"],
            },
        },
        getAllEntryProgresHandler
    )

    server.put(
        "/:id",
        {
            schema: {
                tags: ["Entry Progres"],
            },
        },
        updateEntryProgresHandler
    )

    server.delete(
        "/:id",
        {
            schema: {
                tags: ["Entry Progres"],
            },
        },
        deleteEntryProgresHandler
    )

    server.delete(
        "/dokumen/:id",
        {
            schema: {
                tags: ["Entry Progres"],
            },
        },
        deleteDokumenHandler
    )
}