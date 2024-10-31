import { FastifyReply, FastifyRequest } from "fastify"
import PermissionService from "./permission.service"
import { CreatePermissionInput } from "./permission.schema"
import { errorFilter } from "../../middlewares/error-handling"

export async function createPermissionHandler(
    request: FastifyRequest<{
        Body: CreatePermissionInput
    }>,
    reply: FastifyReply
){
    
    try {
        const { name, description } = request.body
        const permission = await PermissionService.createPermission(name, description || undefined)
        reply.code(201).send({
            message: 'Permission created successfully',
            data: permission,
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllPermissionHandler(
    request: FastifyRequest,
    reply: FastifyReply
){
    try {
        const permissions = await PermissionService.getAllPermission()
        reply.send({
            message: 'List of permissions',
            data: permissions,
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getPermissionByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
){
    try {
        const permission = await PermissionService.getPermissionById(request.params.id)
        reply.send({
            message: 'Permission detail',
            data: permission,
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updatePermissionHandler(
    request: FastifyRequest<{
        Body: CreatePermissionInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
){
    try {
        const { name, description } = request.body
        const permission = await PermissionService.updatePermission(request.params.id, name, description || undefined)
        reply.send({
            message: 'Permission updated successfully',
            data: permission,
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deletePermissionHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
){
    try {
        const permission = await PermissionService.deletePermission(request.params.id)
        reply.send({
            message: 'Permission deleted successfully',
            data: permission,
            status: "success"
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}