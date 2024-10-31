import { JWT } from '@fastify/jwt'

declare module 'fastify' {
    interface FastifyRequest {
        jwt: JWT
    }
    export interface FastifyInstance {
        authenticate: any
    }
}

type Permission = {
    id: string;
    name: string;
    description: string;
  };
  
  type Role = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    permissions: Permission[];
  };

export type UserPayload = {
    id: string
    username: string
    role: Role
}
declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: UserPayload
    }
}