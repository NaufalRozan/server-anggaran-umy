import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';
import { unitResponseSchema } from '../unit/unit.schema';

const createUserSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }).min(1),
    password: z.string({
        required_error: 'Password is required',
    }).min(6),
    roleId: z.string().optional(),
    unitIds: z.array(z.string({
        required_error: 'Unit ID is required',
    })).optional(),
})

const updateUserSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }).min(1),
    unitIds: z.array(z.string({
        required_error: 'Unit ID is required',
    })).optional(),
    roleId: z.string().nullable().optional(),
})

const createUserResponseSchema = z.object({
    id: z.string(),
    username: z.string(),
    roleId: z.string().nullable().optional(),
})

const userResponseSchema = z.object({
    ...createUserResponseSchema.shape,
    role: z.enum(['DEPARTMENT', 'FACULTY', 'UNIVERSITY']),
    facultyId: z.string().nullable().optional(),
    unitKerjaId: z.string().nullable().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    UnitKerja: z.object({
        id: z.string(),
        name: z.string(),
        faculty_id: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    }).nullable().optional(),
    Faculty: z.object({
        id: z.string(),
        name: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    }).nullable().optional(),
})

const userAllResponseSchema = z.object({
    ...userResponseSchema.shape,
    univData: z.union([
        unitResponseSchema,
        z.array(unitResponseSchema),
    ]),
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

const changePasswordSchema = z.object({
    oldPassword: z.string({
        required_error: 'Old password is required',
    }).min(6),
    newPassword: z.string({
        required_error: 'New password is required',
    }).min(6),
})

const connectUserUnitSchema = z.object({
    unitIds: z.array(z.string({
        required_error: 'Unit ID is required',
    })),
})

const disconnectUserUnitSchema = z.object({
    unitIds: z.array(z.string({
        required_error: 'Unit ID is required',
    })),
})


export type CreateUserInput = z.infer<typeof createUserSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type ConnectUserUnitInput = z.infer<typeof connectUserUnitSchema>;
export type DisconnectUserUnitInput = z.infer<typeof disconnectUserUnitSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export const { schemas: userSchema, $ref } = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
    userResponseSchema,
    changePasswordSchema,
    userAllResponseSchema,
    connectUserUnitSchema,
    disconnectUserUnitSchema,
    updateUserSchema,
})