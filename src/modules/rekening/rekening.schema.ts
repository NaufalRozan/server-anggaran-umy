import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createRekeningSchema = z.object({
    noRek: z.string({
        required_error: "Kode MA harus diisi"
    }),
    name: z.string({
        required_error: "Nama MA harus diisi"
    }),
    jenisId: z.string({
        required_error: "Jenis MA harus diisi"
    }),
    units: z.array(z.string()).optional(),
})

export type CreateRekeningInput = z.infer<typeof createRekeningSchema>;

export const { schemas: rekeningSchema, $ref } = buildJsonSchemas(
    {
        createRekeningSchema,
    },
    {
        $id: 'rekeningSchema',
    }
)