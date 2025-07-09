import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createJadwalLaporanSchema = z.object({
    unitId: z.array(z.string({
        required_error: "Unit ID harus diisi"
    })),
    name: z.string({
        required_error: "Nama Tahap harus diisi"
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

export type CreateJadwalLaporanInput = z.infer<typeof createJadwalLaporanSchema>;

export const { schemas: jadwalLaporanSchema, $ref } = buildJsonSchemas(
    {
        createJadwalLaporanSchema,
    },
    {
        $id: 'jadwalLaporanSchema',
    }
)