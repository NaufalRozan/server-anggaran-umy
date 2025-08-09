import { FastifyInstance } from "fastify";
import { $ref } from "./user.schema";
import { changePasswordHandler, connectUnitHandler, deleteUserHandler, disconnectUnitHandler, getAllUserHandler, getUserByIdHandler, getUserByTokenHandler, loginUserHandler, logoutHandler, registerUserHandler, seedUserHandler, updateUserHandler } from "./user.controller";

export async function userRoutes(server: FastifyInstance) {
    server.get(
        '/all',
        {
            schema:{
                summary: 'Get all user',
                tags: ['User'],
                // response: {
                //     200: {
                //         type: 'array',
                //         items: $ref('userResponseSchema')
                //     }
                // }
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
                // response: {
                //     200: $ref('userAllResponseSchema')
                // }
            },
            preHandler: [server.authenticate]
        },
        getUserByTokenHandler
    )

    server.post(
        '/seed',
        {
            schema: {
                summary: 'Seed user',
                tags: ['User'],
            },
        },
        seedUserHandler
    )

    server.get(
        '/:id',
        {
            schema:{
                summary: 'Get one user by id',
                tags: ['User'],
                // response: {
                //     200: $ref('userAllResponseSchema')
                // }
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

    server.put(
        '/:id',
        {
            schema:{
                summary: 'Update user',
                tags: ['User'],
                body: $ref('updateUserSchema'),
                // response: {
                //     200: $ref('createUserResponseSchema')
                // }
            },
            preHandler: [server.authenticate]
        },
        updateUserHandler
    )

    server.delete(
        '/:id',
        {
            schema:{
                summary: 'Delete user',
                tags: ['User'],
            },
            preHandler: [server.authenticate]
        },
        deleteUserHandler
    )

    server.put(
        '/:id/unit',
        {
            schema:{
                summary: 'Connect user to unit',
                tags: ['User'],
                body: $ref('connectUserUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        connectUnitHandler
    )

    server.delete(
        '/:id/unit',
        {
            schema:{
                summary: 'Disconnect user from unit',
                tags: ['User'],
                body: $ref('disconnectUserUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        disconnectUnitHandler
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
                // response: {
                //     201: $ref('createUserResponseSchema'),
                // },
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