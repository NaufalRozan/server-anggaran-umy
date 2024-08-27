import { FastifyReply, FastifyRequest } from "fastify";
import { ChangePasswordInput, CreateUserInput } from "./user.schema";
import { errorFilter } from "../../middlewares/error-handling";
import UserRepository from "./user.repository";
import { verifyPassword } from "../../utils/hash";
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
        reply.code(201).send(user);
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
        
        const body = request.body;
    
        try {
            const user = await UserRepository.FindByUsername(body.username);
            if (!user) {
                return reply.status(401).send({
                    message: "Invalid username. Try again!"
                });
            };
        
            const isValidPassword = verifyPassword({
                candidatePassword: body.password,
                salt: user.salt,
                hash: user.password
            });
        
            if (!isValidPassword) {
                return reply.status(401).send({
                    message: "Password is incorrect"
                });
            };
        
            const payload = {
                id: user.id,
                username: user.username,
            }
            const token = request.jwt.sign(payload);
        
            reply.setCookie('access_token', token, {
                path: '/',
                maxAge: 1000 * 60 * 60 * 24 * 7,    // for a week
                httpOnly: true,
                secure: true,
            })
        
            return { accessToken: token }
        } catch (e) {
            errorFilter(e, reply);
        }
}

export async function logoutHandler(request: FastifyRequest, reply: FastifyReply) {
    reply.clearCookie('access_token');

    return reply.status(201).send({ message: 'Logout successfully' })
}

export async function getAllUserHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const users = await UserService.getAllUsers()
        return users;
    } catch (e) {
        errorFilter(e, reply);
    }
}

export async function getUserByIdHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const user = await UserService.getUserById(request.user.id)
        return user;
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
        return { message: 'Password updated' }
    } catch (e) {
        errorFilter(e, reply);
    }
}
