import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createProkerSPPSchema = z.object({
    prokerId: z.string({
        required_error: "Proker ID harus diisi"
    }),
    diminta: z.number({
        required_error: "Anggaran yang Diminta harus diisi"
    }),
})

const createSPPSchema = z.object({
    tahun: z.string({
        required_error: "Tahun harus diisi"
    }),
    otorisasi: z.boolean().optional(),
    status: z.boolean().optional(),
    periodeSPMUId: z.string({
        required_error: "Periode SPMU harus diisi"
    }),
    proker: z.array(createProkerSPPSchema).min(1, {
        message: "Proker harus diisi"
    }),
})

const updateSPPSchema = z.object({
    otorisasi: z.boolean().optional(),
    status: z.boolean().optional(),
})

export type CreateSPPInput = z.infer<typeof createSPPSchema>;

export const { schemas: sppSchema, $ref } = buildJsonSchemas(
    {
        createSPPSchema,
        updateSPPSchema
    },
    {
        $id: 'sppSchema',
    }
)