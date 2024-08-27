import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import fjwt from '@fastify/jwt'
import fCookie from '@fastify/cookie'
import { userSchema } from './modules/user/user.schema'
import { UserPayload } from './global'
import pino from 'pino'
import ukRoutes from './modules/unit-kerja/uk.route'
import { unitKerjaSchema } from './modules/unit-kerja/uk.schema'
import { authRoutes, userRoutes } from './modules/user/user.route'

const server = Fastify({
    
})

server.register(import("@fastify/swagger"));
server.register(import("@fastify/swagger-ui"), {
  prefix: "/docs",
});

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
        const token = request.cookies.access_token;

        if (!token) {
            return reply.status(401).send({ message: 'Authentication required' })
        }

        const decoded = request.jwt.verify(token)
        request.user = decoded as UserPayload;
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

server.get('/', async (request, reply) => {
    return { hello: 'world' }
})

async function start() {
    for (const schema of [...userSchema, ...unitKerjaSchema]) {
        server.addSchema(schema)
    }

    server.register(authRoutes, { prefix: 'api/v1/auth' })
    server.register(userRoutes, { prefix: 'api/v1/users' })
    server.register(ukRoutes, { prefix: 'api/v1/unit-kerja' })

    try {
        await server.listen({ port: 5000, host: '0.0.0.0' })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()