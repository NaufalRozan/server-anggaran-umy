import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createSPPSchema = z.object({
    tahun: z.string({
        required_error: "Tahun harus diisi"
    }),
    otorisasi: z.boolean({
        required_error: "Otorisasi harus diisi"
    }),
    status: z.string({
        required_error: "Status harus diisi"
    }),
})

export type CreateSPPInput = z.infer<typeof createSPPSchema>;

export const { schemas: sppSchema, $ref } = buildJsonSchemas(
    {
        createSPPSchema,
    },
    {
        $id: 'sppSchema',
    }
)