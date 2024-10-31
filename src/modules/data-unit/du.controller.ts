import { FastifyReply, FastifyRequest } from "fastify"
import { CreateDataUnitInput } from "./du.schema"
import DataUnitService from "./du.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createDataUnitHandler(
    request: FastifyRequest<{
        Body: CreateDataUnitInput
    }>,
    reply: FastifyReply
) {
    try {
        const dataUnit = await DataUnitService.createDataUnit(request.body)
        reply.send({
            data: dataUnit,
            message: "Data Unit Created Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findAllDataUnitHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const dataUnit = await DataUnitService.findAllDataUnit()
        reply.send({
            data: dataUnit,
            message: "Data Unit Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function findOneDataUnitHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const dataUnit = await DataUnitService.findOneDataUnit(request.params.id)
        reply.send({
            data: dataUnit,
            message: "Data Unit Fetched Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateDataUnitHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
        Body: {
            unitId: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const dataUnit = await DataUnitService.updateDataUnit(request.body.unitId, request.params.id)
        reply.send({
            data: dataUnit,
            message: "Data Unit Updated Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteDataUnitHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const dataUnit = await DataUnitService.deleteDataUnit(request.params.id)
        reply.send({
            data: dataUnit,
            message: "Data Unit Deleted Successfully",
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}