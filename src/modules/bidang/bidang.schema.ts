import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createBidangSchema = z.object({
    name: z.string({
        required_error: "Nama Bidang harus diisi"
    }),
    code: z.string({
        required_error: "Kode Bidang harus diisi"
    }),
})

export type CreateBidangInput = z.infer<typeof createBidangSchema>;

export const { schemas: bidangSchema, $ref } = buildJsonSchemas(
    {
        createBidangSchema,
    },
    {
        $id: 'bidangSchema',
    }
)