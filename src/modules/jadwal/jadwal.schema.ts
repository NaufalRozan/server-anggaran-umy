import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createJadwalSchema = z.object({
    unitId: z.array(z.string({
        required_error: "Unit ID harus diisi"
    })),
    name: z.string({
        required_error: "Nama Tahap harus diisi"
    }),
    tahun: z.string({
        required_error: "Tahun Tahap harus diisi"
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


export type CreateJadwalInput = z.infer<typeof createJadwalSchema>;

export const { schemas: jadwalSchema, $ref } = buildJsonSchemas(
    {
        createJadwalSchema,
    },
    {
        $id: 'jadwalSchema',
    }
)