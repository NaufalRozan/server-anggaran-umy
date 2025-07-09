import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createPeriodeSPMU = z.object({
    periode: z.string({
        required_error: "Periode harus diisi"
    }),
    dateRange: z.object(
        {
            from: z.date().optional(),
            to: z.date().optional(),
        },
        {
            required_error: "Please select a date range",
        }
    ),
})

const createJadwalPencairanSchema = z.object({
    unitId: z.array(z.string({
        required_error: "Unit ID harus diisi"
    })),
    tahun: z.string({
        required_error: "Tahun harus diisi"
    }),
    batasKegiatan: z.number({
        required_error: "Batas Kegiatan harus diisi"
    }),
    tunggakanSPJ: z.number().optional(),
    periodeSPMU: z.array(createPeriodeSPMU).min(1, {
        message: "Periode SPMU harus diisi"
    }),
})

export type CreateJadwalPencairanInput = z.infer<typeof createJadwalPencairanSchema>;

export const { schemas: jadwalPencairanSchema, $ref } = buildJsonSchemas(
    {
        createJadwalPencairanSchema,
    },
    {
        $id: 'jadwalPencairanSchema',
    }
)