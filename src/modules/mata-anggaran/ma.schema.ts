import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createMaSchema = z.object({
    maCode: z.string().optional(),
    name: z.string({
        required_error: "Nama MA harus diisi"
    }),
    indicatorId: z.string({
        required_error: "Indicator ID harus diisi"
    }),
})

const createMatoIndicatorSchema = z.object({
    kpiId: z.string({
        required_error: "KPI ID harus diisi"
    }),
    maId: z.string({
        required_error: "MA ID harus diisi"
    }),
    unitId: z.string({
        required_error: "Unit ID harus diisi"
    }),
    uraian: z.string({
        required_error: "Uraian harus diisi"
    }),
    output: z.string({
        required_error: "Output harus diisi"
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
}).refine((data) => data.dateRange.from && data.dateRange.to && data.dateRange.from < data.dateRange.to, {
    path: ["dateRange"],
    message: "From date must be before to date",
});

export type CreateMaInput = z.infer<typeof createMaSchema>;
export type CreateMatoIndicatorInput = z.infer<typeof createMatoIndicatorSchema>;

export const { schemas: maSchema, $ref } = buildJsonSchemas(
    {
        createMaSchema,
        createMatoIndicatorSchema,
    },
    {
        $id: 'maSchema',
    }
)