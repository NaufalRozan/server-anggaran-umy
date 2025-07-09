import { MultipartFile, MultipartValue } from "@fastify/multipart";
import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createEntryProgresSchema = z.object({
    prokerId: z.string({
        required_error: "Proker ID tidak ditemukan"
    }),

    statusKegiatan: z.string().optional(),
    persenKegiatan: z.number().optional(),
    uraianKegiatan: z.string().optional(),
    realisasiOutputKegiatan: z.string().optional(),
    statusDiperbaiki: z.boolean().optional(),

    statusPenilaianBPM: z.string().optional(),
    persenPenilaianBPM: z.number().optional(),
    uraianPenilaianBPM: z.string().optional(),
    realisasiOutputBPM: z.string().optional(),
    statusApprovalBPM: z.string().optional(),
})

const createDokumenSchema = z.object({
    id: z.custom<MultipartValue<string>>(),
    files: z.custom<MultipartFile[]>()
})

export type CreateEntryProgresInput = z.infer<typeof createEntryProgresSchema>;

export type CreateDokumenInput = z.infer<typeof createDokumenSchema>

export const { schemas: entryProgresSchema, $ref } = buildJsonSchemas(
    {
        createEntryProgresSchema,
        createDokumenSchema,
    },
    {
        $id: 'entryProgresSchema',
    }
)