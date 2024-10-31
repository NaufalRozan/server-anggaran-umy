import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createJRSchema = z.object({
    name: z.string({
        required_error: "Nama Jenis Rekening harus diisi"
    }),
})

export type CreateJenisRekeningInput = z.infer<typeof createJRSchema>;

export const { schemas: jrSchema, $ref } = buildJsonSchemas(
    {
        createJRSchema,
    },
    {
        $id: 'jrSchema',
    }
)