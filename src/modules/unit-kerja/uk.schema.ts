import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod"


const createUnitKerjaSchema = z.object({
    name: z.string({
        required_error: 'Nama unit kerja is required',
    }).min(1),
    tahun: z.string()
})

const unitKerjaResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
})

export type CreateUnitKerjaInput = z.infer<typeof createUnitKerjaSchema>;

export const { schemas: unitKerjaSchema, $ref } = buildJsonSchemas({
    createUnitKerjaSchema,
    unitKerjaResponseSchema,
},
{
    $id: 'unitKerjaSchema',
})