import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUnitKerjaInput } from "./uk.schema";
import UnitKerjaService from "./uk.service";
import { errorFilter } from "../../middlewares/error-handling";

export async function createUnitKerjaHandler(
    req: FastifyRequest<{
        Body: CreateUnitKerjaInput
    }>,
    reply: FastifyReply
) {
    const body = req.body

    try {
        const unitKerja = await UnitKerjaService.createUnitKerja(body.name, req.user.id, req.body.tahun)
        reply.code(201).send(unitKerja)

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function getAllUnitKerjaHandler(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const unitKerja = await UnitKerjaService.getAllUnitKerja()
        reply.send(unitKerja)

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function getUnitKerjaByIdHandler(
    req: FastifyRequest<{
        Params: {
            id: string;
        };
    }>,
    reply: FastifyReply
) {
    try {
        const unitKerja = await UnitKerjaService.getUnitKerjaById(req.params.id)
        reply.send(unitKerja)

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function updateUnitKerjaHandler(
    req: FastifyRequest<{
        Body: CreateUnitKerjaInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    const body = req.body

    try {
        const unitKerja = await UnitKerjaService.updateUnitKerja(req.params.id, body.name, body.tahun)
        reply.send(unitKerja)

    } catch (e) {
        errorFilter(e, reply)
    }
}

export async function deleteUnitKerjaHandler(
    req: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const unitKerja = await UnitKerjaService.deleteUnitKerja(req.params.id)
        reply.send(unitKerja)

    } catch (e) {
        errorFilter(e, reply)
    }
}