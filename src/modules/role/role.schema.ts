import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createRoleSchema = z.object({
    name: z.string({
        required_error: 'Name role is required',
    }).min(1),
    permissions: z.array(z.string()).nullable().optional(),
})

const roleResponseSchema = z.object({
    id: z.string(),
    ...createRoleSchema.shape,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type CreateRoleInput = z.infer<typeof createRoleSchema>;

export const { schemas: roleSchema, $ref } = buildJsonSchemas(
    {
        createRoleSchema,
    },
    {
        $id: 'roleSchema',
    }
)