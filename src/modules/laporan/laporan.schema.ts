import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createLaporanSchema = z.object({
    capaian: z.number({
        required_error: "Capaian harus diisi",
    }),
    kendala: z.string({
        required_error: "Kendala harus diisi"
    }),
    perbaikan: z.string({
        required_error: "Perbaikan harus diisi"
    }),
    rtl: z.string({
        required_error: "RTL harus diisi"
    }),
    pic: z.string({
        required_error: "PIC harus diisi"
    }),
    komentar: z.string().optional(),
    rtl_auditor: z.string().optional(),
    indikatorId: z.string({
        required_error: "Indikator ID harus diisi"
    }),
    capaian_auditor: z.number().optional(),
    isApproved: z.boolean().optional(),
})

export type CreateLaporanInput = z.infer<typeof createLaporanSchema>;

export const { schemas: laporanSchema, $ref } = buildJsonSchemas(
    {
        createLaporanSchema
    },
    {
        $id: 'laporanSchema',
    }
)

