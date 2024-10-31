import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRoleInput } from "./role.schema";
import { errorFilter } from "../../middlewares/error-handling";
import RoleService from "./role.service";

export async function createRoleHandler(
    request: FastifyRequest<{
        Body: CreateRoleInput
    }>,
    reply: FastifyReply
) {
    try {
        const body = request.body;
        const role = await RoleService.createRole(body.name, body.permissions ?? [])
        reply.code(201).send({
            message: 'Role created',
            data: role,
            status: 'success'
        });
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function getAllRolesHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const roles = await RoleService.getAllRoles()
        reply.send({
            message: 'List of roles',
            data: roles,
            status: 'success'
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function getRoleByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const id = request.params.id;
        const role = await RoleService.getRoleById(id)
        reply.send({
            message: 'Role detail',
            data: role,
            status: 'success'
        })
    }
    catch (e) {
        errorFilter(e, reply);
    }
}

export async function updateRoleHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        },
        Body: CreateRoleInput
    }>,
    reply: FastifyReply
) {
    try {
        const id = request.params.id;
        const body = request.body;
        const role = await RoleService.updateRole(id, body.name, body.permissions ?? [])
        reply.send({
            message: 'Role updated',
            data: role,
            status: 'success'
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function deleteRoleHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const id = request.params.id;
        await RoleService.deleteRole(id)
        reply.send({
            message: 'Role deleted',
            status: 'success',
            data: []
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}