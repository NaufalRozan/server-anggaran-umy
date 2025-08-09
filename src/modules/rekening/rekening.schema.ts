import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createRekeningSchema = z.object({
    noRek: z.string().optional(),
    name: z.string({
        required_error: "Nama MA harus diisi"
    }),
    jenisId: z.string({
        required_error: "Jenis MA harus diisi"
    }),
    units: z.array(z.string()).optional(),
})

const createManyRekeningSchema = z.array(z.object({
    name: z.string({
        required_error: "Nama MA harus diisi"
    }),
    noRek: z.string({
        required_error: "Nomor Rekening harus diisi"
    }),
    units: z.array(z.string()).optional(),
}));

export type CreateRekeningInput = z.infer<typeof createRekeningSchema>;
export type CreateManyRekeningInput = z.infer<typeof createManyRekeningSchema>;

export const { schemas: rekeningSchema, $ref } = buildJsonSchemas(
    {
        createRekeningSchema,
        createManyRekeningSchema,
    },
    {
        $id: 'rekeningSchema',
    }
)