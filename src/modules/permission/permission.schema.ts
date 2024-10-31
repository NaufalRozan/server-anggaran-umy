import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";


const createPermissionSchema = z.object({
    name: z.string({
        required_error: 'Name permission is required',
    }).min(1),
    description: z.string().nullable().optional(),
})

const permissionResponseSchema = z.object({
    id: z.string(),
    ...createPermissionSchema.shape,
})

export type CreatePermissionInput = z.infer<typeof createPermissionSchema>;

export const { schemas: permissionSchema, $ref } = buildJsonSchemas({
    createPermissionSchema,
    permissionResponseSchema,
},
{
    $id: 'permissionSchema',
})