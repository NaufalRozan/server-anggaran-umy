import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createUnitSchema = z.object({
    name: z.string({
        required_error: 'Name faculty is required',
    }),
    bidangId: z.string({
        required_error: 'Bidang is required',
    }),
})

export const unitResponseSchema = z.object({
    id: z.string(),
    ...createUnitSchema.shape,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type CreateUnitInput = z.infer<typeof createUnitSchema>;

export const { schemas: unitSchema, $ref } = buildJsonSchemas({
    createUnitSchema: createUnitSchema,
    unitResponseSchema: unitResponseSchema,
},
{
    $id: 'unitSchema',
}) 