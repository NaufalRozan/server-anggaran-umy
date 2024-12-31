import { FastifyInstance } from "fastify";
import { createCategoryUnitHandler, createUnitHandler, deleteCategoryUnitHandler, deleteUnitHandler, getAllCategoryUnitHandler, getAllUnitHandler, getCategoryUnitByIdHandler, getUnitByIdHandler, updateCategoryUnitHandler, updateUnitHandler } from "./unit.controller";
import { $ref } from "./unit.schema";

export async function unitRoutes(server: FastifyInstance){
    server.get(
        '/',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        getAllUnitHandler
    )

    server.get(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        getUnitByIdHandler
    )

    server.post(
        '/',
        {
            schema: {
                tags: ['Unit'],
                body: $ref('createUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        createUnitHandler
    )

    server.put(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
                body: $ref('createUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        updateUnitHandler
    )

    server.delete(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        deleteUnitHandler
    )
}

export async function categoryUnitRoutes(server: FastifyInstance){
    server.get(
        '/',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        getAllCategoryUnitHandler
    )

    server.get(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        getCategoryUnitByIdHandler
    )

    server.post(
        '/',
        {
            schema: {
                tags: ['Unit'],
                body: $ref('createCategoryUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        createCategoryUnitHandler
    )

    server.put(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
                body: $ref('createCategoryUnitSchema'),
            },
            preHandler: [server.authenticate]
        },
        updateCategoryUnitHandler
    )

    server.delete(
        '/:id',
        {
            schema: {
                tags: ['Unit'],
            },
            preHandler: [server.authenticate]
        },
        deleteCategoryUnitHandler
    )
}