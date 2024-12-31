import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createUnitSchema = z.object({
    name: z.string({
        required_error: 'Name Unit is required',
    }),
    categoryId: z.string().optional(),
})

const createCategoryUnitSchema = z.object({
    name: z.string({
        required_error: 'Name Category Unit is required',
    })
})

export const unitResponseSchema = z.object({
    id: z.string(),
    ...createUnitSchema.shape,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type CreateUnitInput = z.infer<typeof createUnitSchema>;
export type CreateCategoryUnitInput = z.infer<typeof createCategoryUnitSchema>;

export const { schemas: unitSchema, $ref } = buildJsonSchemas({
    createUnitSchema: createUnitSchema,
    unitResponseSchema: unitResponseSchema,
    createCategoryUnitSchema: createCategoryUnitSchema,
},
{
    $id: 'unitSchema',
})

export const { schemas: categoryUnitSchema } = buildJsonSchemas({
    createCategoryUnitSchema: createCategoryUnitSchema,
},
{
    $id: 'categoryUnitSchema',
})