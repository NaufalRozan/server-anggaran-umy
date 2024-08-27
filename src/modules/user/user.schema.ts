import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const createUserSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }).min(1),
    password: z.string({
        required_error: 'Password is required',
    }).min(6),
})

const createUserResponseSchema = z.object({
    id: z.string(),
    username: z.string(),
})

const loginSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }).min(1),
    password: z.string({
        required_error: 'Password is required',
    }).min(6),
})

const loginResponseSchema = z.object({
    accessToken: z.string(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const { schemas: userSchema, $ref } = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
})