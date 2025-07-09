import { MultipartFile, MultipartValue } from "@fastify/multipart";
import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createFileSchema = z.object({
    id: z.custom<MultipartValue<string>>().optional(),
    file: z.custom<MultipartFile>().optional(),
    files: z.custom<MultipartFile[]>().optional()
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