import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createDataUnitSchema = z.object({
    units: z.array(z.string()),
})

export type CreateDataUnitInput = z.infer<typeof createDataUnitSchema>;

export const { schemas: dataUnitSchema, $ref } = buildJsonSchemas(
    {
        createDataUnitSchema,
    },
    {
        $id: 'dataUnitSchema',
    }
)