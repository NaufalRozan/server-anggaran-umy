import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import { changePasswordHandler, getAllUserHandler, getUserByIdHandler, loginUserHandler, logoutHandler, registerUserHandler } from "./user.controller";

export async function userRoutes(server: FastifyInstance) {
    

    server.get(
        '/all',
        {
            schema:{
                summary: 'Get all user',
                tags: ['User'],
            },
            preHandler: [server.authenticate]
        },
        getAllUserHandler,
    )

    server.get(
        '/',
        {
            schema:{
                summary: 'Get one user by token id',
                tags: ['User'],
                response: {
                    200: $ref('userResponseSchema')
                }
            },
            preHandler: [server.authenticate]
        },
        getUserByIdHandler
    )

    server.put(
        '/change-password',
        {
            schema:{
                summary: 'Change user password',
                tags: ['User'],
                body: $ref('changePasswordSchema'),
            },
            preHandler: [server.authenticate]
        },
        changePasswordHandler
    )
}

export async function authRoutes(server: FastifyInstance) {
    server.post(
        '/register',
        {
            schema: {
                summary: 'Register user',
                tags: ['Auth'],
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
                tags: ['Auth'],
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
                tags: ['Auth'],
                summary: 'Logout user',
            },
            preHandler: [server.authenticate],
        },
        logoutHandler,
    )
}