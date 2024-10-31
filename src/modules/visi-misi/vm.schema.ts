import { buildJsonSchemas } from "fastify-zod";
import { string, z } from "zod";

const createVmSchema = z.object({
    subUnitId: string({
        required_error: "Sub Unit harus diisi",
    }).min(1).nullable().optional(),
    unitId: string({
        required_error: "Sub Unit harus diisi",
    }).min(1).nullable().optional(),
    tahun: z.string({
        required_error: "Tahun harus diisi",
    }).min(1),
    visi: z.string({
        required_error: "Visi harus diisi",
    }).min(1),
    misi: z.string({
        required_error: "Misi harus diisi",
    }).min(1),
    tujuan: z.string({
        required_error: "Tujuan harus diisi",
    }).min(1),
    keterangan: z.string({
        required_error: "Keterangan harus diisi",
    }).min(1),
})

const VmResponseSchema = z.object({
    id: z.string(),
    ...createVmSchema.shape,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type CreateVmInput = z.infer<typeof createVmSchema>;

export const { schemas: vmSchema, $ref } = buildJsonSchemas({
    createVmSchema,
    VmResponseSchema,
},
{
    $id: 'vmSchema',
})