import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import fjwt from '@fastify/jwt'
import fCookie from '@fastify/cookie'
import { UserPayload } from './global'
import cors from '@fastify/cors'
import { serverRoutes } from './routes'
import multipart from '@fastify/multipart'
import { streamFileByIDHandler, streamFileByPathHandler } from './modules/test-file/file.controller'
const server = Fastify()

server.register(import("@fastify/swagger"), {
    swagger: {
        info: {
            title: "SPMI API",
            description: "SPMI API Documentation",
            version: "0.1.0",
        },
        externalDocs: {
            url: "https://spmi.iqbalalhabib.com/docs",
            description: "Find more info here",
        },
        host: "localhost:5002",
        schemes: ["http", "https"],
        consumes: ["application/json", "multipart/form-data"],
        produces: ["application/json"],
    }
});
server.register(import("@fastify/swagger-ui"), {
    prefix: "/docs",
});

server.register(cors, {
    origin: `${process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : 'http://localhost:3000'}`,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
})

server.ready(err => {
    if (err) throw err
    server.swagger()
})

server.register(fjwt, {
    secret: process.env.JWT_SECRET || 'supersecret'
})

server.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
        const token = request.cookies?.access_token
        const authHeader = request.headers.authorization

        if (!token && !authHeader) {
            return reply.status(401).send({ message: 'Authentication required' })
        }

        const jwtToken = token || authHeader?.split(' ')[1]

        if (!jwtToken) {
            return reply.status(401).send({ message: 'Invalid token' })
        }

        try {
            const decoded = request.jwt.verify(jwtToken) as UserPayload
            request.user = decoded
        } catch (e) {
            return reply.status(401).send({ message: 'Invalid or expired token' })
        }

    }
);

server.addHook('preHandler', (req, res, next) => {
    req.jwt = server.jwt
    next()
})

server.register(fCookie, {
    secret: process.env.COOKIE_SECRET || 'supersecret',
    hook: 'preHandler',
})

server.register(multipart, {
    attachFieldsToBody: true,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    }
})

server.get(
    "/public/:id",
    {
        schema: {
            tags: ["File"],
        },
    },
    streamFileByIDHandler
);

server.get(
    "/public/filename/:filename",
    {
        schema: {
            tags: ["File"],
        },
    },
    streamFileByPathHandler
);

server.get('/', async (request, reply) => {
    return { hello: 'world' }
})

async function start() {
    serverRoutes(server)

    try {
        await server.listen({ port: 5002, host: '0.0.0.0' })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()