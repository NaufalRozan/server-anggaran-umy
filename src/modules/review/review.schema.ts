import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createReviewSchema = z.object({
    tahun: z.string({
        required_error: "Tahun is required"
    }),
    unitId: z.string({
        required_error: "Unit Id is required"
    }),
    reviewUmun: z.string({
        required_error: "Review Umum is required"
    }).optional(),
    tanggapanAkhir: z.string({
        required_error: "Tanggapan Akhir is required"
    }).optional(),  
})

export type CreateReviewInput = z.infer<typeof createReviewSchema>;

export const { schemas: reviewSchema, $ref } = buildJsonSchemas(
    {
        createReviewSchema,
    },
    {
        $id: 'reviewSchema',
    }
)