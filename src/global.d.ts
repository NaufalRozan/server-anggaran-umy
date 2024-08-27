import { JWT } from '@fastify/jwt'

declare module 'fastify' {
    interface FastifyRequest {
        jwt: JWT
    }
    export interface FastifyInstance {
        authenticate: any
    }
}
export type UserPayload = {
    id: string
    username: string
}
declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: UserPayload
    }
}