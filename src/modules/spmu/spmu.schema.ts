import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createSPMUSchema = z.object({
    tahun: z.string({
        required_error: "Tahun harus diisi"
    }),
    sppId: z.string({
        required_error: "SPP ID harus diisi"
    }),
    biroApproval: z.boolean().optional(),
    wr2Approval: z.boolean().optional(),
    tanggal: z.date().optional(),
    status: z.boolean().optional(),
    periodeSPMUId: z.string({
        required_error: "Periode SPMU harus diisi"
    }),
})

export type CreateSPMUInput = z.infer<typeof createSPMUSchema>;

export const { schemas: spmuSchema, $ref } = buildJsonSchemas(
    {
        createSPMUSchema,
    },
    {
        $id: 'spmuSchema',
    }
)