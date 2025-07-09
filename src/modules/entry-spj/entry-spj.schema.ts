import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createEntrySPJSchema = z.object({
    prokerId: z.string({
        required_error: "Proker ID tidak ditemukan"
    }),

    noSPJ: z.string().optional(),
    nominalSPJ: z.number().optional(),

    statusPersetujuanBiro: z.string().optional(),
    keteranganBiro: z.string().optional(),
    tanggalApprovalBiro: z.string().optional(),

    statusPersetujuanBPM: z.string().optional(),
    keteranganBPM: z.string().optional(),
    tanggalApprovalBPM: z.string().optional(),
})

export type CreateEntrySPJInput = z.infer<typeof createEntrySPJSchema>;

export const { schemas: entrySPJSchemas, $ref } = buildJsonSchemas(
    {
        createEntrySPJSchema,
    },
    {
        $id: 'entrySPJSchemas',
    }
)