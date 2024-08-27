import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import { getAllUserHandler, loginUserHandler, logoutHandler, registerUserHandler } from "./user.controller";

export async function userRoutes(server: FastifyInstance) {
    

    server.get(
        '/',
        {
            schema:{
                summary: 'Get all user',
                tags: ['User'],
            },
            preHandler: [server.authenticate]
        },
        getAllUserHandler,
    )
}

export async function authRoutes(server: FastifyInstance) {
    server.post(
        '/register',
        {
            schema: {
                summary: 'Register user',
                tags: ['User'],
                body: $ref('createUserSchema'),
                response: {
                    201: $ref('createUserResponseSchema'),
                },
            },
        },
        registerUserHandler,
    )

    server.post(
        '/login',
        {
            schema: {
                summary: 'Login user',
                tags: ['User'],
                body: $ref('loginSchema'),
                response: {
                    200: $ref('loginResponseSchema'),
                },
            },
        },
        loginUserHandler,
    )

    server.delete(
        '/logout',
        {
            schema: {
                tags: ['User'],
                summary: 'Logout user',
            },
            preHandler: [server.authenticate],
        },
        logoutHandler,
    )
}