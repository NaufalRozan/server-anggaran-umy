import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createPaguSchema = z.object({
    pagu: z.number({
        required_error: "Pagu harus diisi"
    }),
    tahun: z.string({
        required_error: "Tahun harus diisi"
    }),
    unitId: z.array(z.string({
        required_error: "Unit ID harus diisi"
    })),
})

export type CreatePaguInput = z.infer<typeof createPaguSchema>;

export const { schemas: paguSchema, $ref } = buildJsonSchemas(
    {
        createPaguSchema,
    },
    {
        $id: 'paguSchema',
    }
)