import { FastifyReply, FastifyRequest } from "fastify";
import { ChangePasswordInput, ConnectUserUnitInput, CreateUserInput, UpdateUserInput } from "./user.schema";
import { errorFilter } from "../../middlewares/error-handling";
import UserService from "./user.service";

export async function registerUserHandler(
    request: FastifyRequest<{
        Body: CreateUserInput
    }>,
    reply: FastifyReply
) {

    const body = request.body;

    try {
        const user = await UserService.createUser(body)
        reply.code(201).send({
            data: user,
            message: "User created successfully",
            status: "success"
        });
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function loginUserHandler(
    request: FastifyRequest<{
        Body: CreateUserInput
    }>,
    reply: FastifyReply
) {
    try {
        const body = request.body;
        const payload = await UserService.LoginUser(body.username, body.password)
        const token = request.jwt.sign(payload, {
            expiresIn: 1000 * 60 * 60 * 24 * 7
        });

        reply.setCookie('access_token', token, {
            path: '/',
            domain: '.iqbalalhabib.com',
            maxAge: 1000 * 60 * 60 * 24 * 7,    // for a week
            httpOnly: true,
            secure: true,
        })

        return { accessToken: token }
    } catch (e) {
        if (e instanceof Error) {
            return reply.status(400).send({ message: e.message })
        }
        errorFilter(e, reply);
    }
}

export async function logoutHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    reply.clearCookie('access_token', {
        path: '/',
        domain: '.iqbalalhabib.com',
        httpOnly: true,
        secure: true
    });

    return reply.status(201).send({ 
        message: 'Logged out successfully',
        status: 'success',
        data: []
     })
}

export async function getAllUserHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const users = await UserService.getAllUsers(request.user.id)
        reply.send({
            data: users,
            message: "Users fetched successfully",
            status: "success"
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function getUserByTokenHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const user = await UserService.getUserById(request.user.id)
        reply.send({
            data: user,
            message: "User fetched successfully",
            status: "success"
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}
export async function getUserByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const user = await UserService.getUserById(request.params.id)
        reply.send({
            data: user,
            message: "User fetched successfully",
            status: "success"
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function changePasswordHandler(
    request: FastifyRequest<{
        Body: ChangePasswordInput
    }>,
    reply: FastifyReply
) {
    try {
        await UserService.changePassword(request.user.id, request.body.newPassword, request.body.oldPassword)
        reply.send({
            message: "Password changed successfully",
            status: "success",
            data: []
        })
    } catch (e: any) {
        if (e.message === 'Password is incorrect') {
            return reply.status(401).send({ message: 'Password is incorrect' })
        }
        errorFilter(e, reply);
    }
}

export async function updateUserHandler(
    request: FastifyRequest<{
        Body: UpdateUserInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const body = request.body;
        const user = await UserService.updateUser(request.params.id, body)
        reply.send({
            data: user,
            message: "User updated successfully",
            status: "success"
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function deleteUserHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await UserService.deleteUser(request.params.id)
        reply.send({
            message: "User deleted successfully",
            status: "success",
            data: []
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function connectUnitHandler(
    request: FastifyRequest<{
        Body: ConnectUserUnitInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await UserService.connectUserUnitAndSubUnit(request.params.id, request.body.unitIds)
        reply.send({
            message: "Unit connected successfully",
            status: "success",
            data: []
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}


export async function disconnectUnitHandler(
    request: FastifyRequest<{
        Body: ConnectUserUnitInput,
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        await UserService.disconnectUserUnitAndSubUnit(request.params.id, request.body.unitIds)
        reply.send({
            message: "Unit disconnected successfully",
            status: "success",
            data: []
        })
    } catch (e) {
        errorFilter(e, reply);
    }
}

