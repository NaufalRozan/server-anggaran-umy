import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";


const createKpiSchema = z.object({
    kpiCode: z.string({
        required_error: "Kode KPI harus diisi"
    }),
    name: z.string({
        required_error: "Nama KPI harus diisi"
    }),
    sifat: z.string({
        required_error: "Sifat KPI harus diisi"
    }),
    year: z.string({
        required_error: "Tahun KPI harus diisi"
    }),
    bidangId: z.string({
        required_error: "Bidang KPI harus diisi"
    }),
    primaryPICId: z.string({
        required_error: "PIC Utama KPI harus diisi"
    }),
    standard: z.string({
        required_error: "Standar KPI harus diisi"
    }).optional(),
    baseline: z.string({
        required_error: "Baseline KPI harus diisi"
    }).optional(),
    target: z.string({
        required_error: "Target KPI harus diisi"
    }).optional(),
    secondaryPICId: z.string().optional(),
})

export type CreateKpiInput = z.infer<typeof createKpiSchema>;

export const { schemas: kpiSchema, $ref } = buildJsonSchemas(
    {
        createKpiSchema,
    },
    {
        $id: 'kpiSchema',
    }
)