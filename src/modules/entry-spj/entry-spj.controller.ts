import { FastifyReply, FastifyRequest } from "fastify";
import { CreateEntrySPJInput } from "./entry-spj.schema";
import EntrySpjService from "./entry-spj.service";
import { errorFilter } from "../../middlewares/error-handling";


export async function createEntrySPJHandler(
    request: FastifyRequest<{
        Body: CreateEntrySPJInput,
        Querystring: {
            id: string
        }
    }>,
    reply: FastifyReply,
) {
    try {
        const entrySPJ = await EntrySpjService.Upsert(request.body, request.query.id)

        reply.send({
            data: entrySPJ,
            message: "Entry SPJ Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}