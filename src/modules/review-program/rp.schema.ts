import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createReviewProgramSchema = z.object({
    prokerId: z.string({
        required_error: "Proker Id is required"
    }),
    temuan: z.string({
        required_error: "Temuan is required"
    }).optional(),
    saran: z.string({
        required_error: "Saran is required"
    }).optional(),
    tanggapan: z.string({
        required_error: "Tanggapan is required"
    }).optional(),
    reviewAkhir: z.string({
        required_error: "Review Akhir is required"
    }).optional(),
    rekomendasi: z.string({
        required_error: "Rekomendasi is required"
    }).optional(),
})

export type CreateReviewProgramInput = z.infer<typeof createReviewProgramSchema>;

export const { schemas: reviewProgramSchema, $ref } = buildJsonSchemas(
    {
        createReviewProgramSchema,
    },
    {
        $id: 'reviewProgramSchema',
    }
)