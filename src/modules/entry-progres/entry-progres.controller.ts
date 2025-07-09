import { FastifyReply, FastifyRequest } from "fastify"
import { CreateDokumenInput, CreateEntryProgresInput } from "./entry-progres.schema"
import EntryProgresService, { TahapDokumen } from "./entry-progres.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createEntryProgresHandler(
    request: FastifyRequest<{
        Body: CreateEntryProgresInput,
        Querystring: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.createEntryProgres(request.body, request.query.id)

        reply.send({
            data: entryProgres,
            message: "Entry Progres Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function createDokumenHandle(
    request: FastifyRequest<{
        Body: CreateDokumenInput,
        Params: {
            tahap: TahapDokumen
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.createDokumen(request.body.id?.value, request.body.files, request.params.tahap)

        reply.send({
            data: entryProgres,
            message: "Entry Progres Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getEntryProgresByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.getEntryProgresById(request.params.id)

        reply.send({
            data: entryProgres,
            message: "Entry Progres Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllEntryProgresHandler(
    request: FastifyRequest<{
        Querystring: {
            prokerId: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.getAllEntryProgres(request.query.prokerId)

        reply.send({
            data: entryProgres,
            message: "List of Entry Progres",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllEntryProgresByProkerIdHandler(
    request: FastifyRequest<{
        Querystring: {
            prokerId: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.getAllEntryProgresByProkerId(request.query.prokerId)

        reply.send({
            data: entryProgres,
            message: "List of Entry Progres",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateEntryProgresHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
        Body: CreateEntryProgresInput
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.updateEntryProgres(request.params.id, request.body)

        reply.send({
            data: entryProgres,
            message: "Entry Progres Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteEntryProgresHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.deleteEntryProgres(request.params.id)

        reply.send({
            data: entryProgres,
            message: "Entry Progres Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteDokumenHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entryProgres = await EntryProgresService.deleteDokumen(request.params.id)

        reply.send({
            data: entryProgres,
            message: "Entry Progres Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}