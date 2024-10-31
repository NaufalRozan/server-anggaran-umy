import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";


const createPembelianSchema = z.object({
    rekeningId: z.string({
        required_error: "Rekening ID harus diisi"
    }),
    prokerId: z.string({
        required_error: "MA ID harus diisi"
    }),
    uraian: z.string({
        required_error: "Uraian harus diisi"
    }),
    satuan: z.string({
        required_error: "Satuan harus diisi"
    }),
})

export type CreatePembelianInput = z.infer<typeof createPembelianSchema>;

export const { schemas: pembelianSchema, $ref } = buildJsonSchemas(
    {
        createPembelianSchema,
    },
    {
        $id: 'pembelianSchema',
    }
)