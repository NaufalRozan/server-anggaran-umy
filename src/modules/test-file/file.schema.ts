import { MultipartFile, MultipartValue } from "@fastify/multipart";
import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createFileSchema = z.object({
    id: z.custom<MultipartValue<string>>()
        .refine((file) => !!file, "id is required"),
    file: z.custom<MultipartFile>()
        .refine((file) => !!file, "File is required")
})


export type CreateFileInput = z.infer<typeof createFileSchema>;

export const { schemas: fileSchema, $ref } = buildJsonSchemas(
    {
        createFileSchema,
    },
    {
        $id: 'fileSchema',
    }
)