import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";


const createKpiSchema = z.object({
    kpiCode: z.string().optional(),
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

const createManyKpiSchema = z.array(z.object({
    name: z.string({
        required_error: "Nama KPI harus diisi"
    }),
    Kode: z.string({
        required_error: "Kode KPI harus diisi"
    }),
    Satuan: z.string().optional(),
    target: z.string().optional(),
    standard: z.custom<string | number>().optional(),
    Bidang: z.string({
        required_error: "Bidang KPI harus diisi"
    }),
    pic: z.string({
        required_error: "PIC KPI harus diisi"
    }),
}))

export type CreateKpiInput = z.infer<typeof createKpiSchema>;
export type CreateManyKpiInput = z.infer<typeof createManyKpiSchema>;

export const { schemas: kpiSchema, $ref } = buildJsonSchemas(
    {
        createKpiSchema,
        createManyKpiSchema,
    },
    {
        $id: 'kpiSchema',
    }
)