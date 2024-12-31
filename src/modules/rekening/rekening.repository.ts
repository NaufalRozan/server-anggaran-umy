import { db } from "../../config/prisma";

class RekeningRepository {
    static async getNextVariantCode(jenisId: string) {
        const lastVariant = await db.rekening.findFirst({
            where: { jenisId },
            orderBy: { noRek: 'desc' }
        });

        if (!lastVariant) return "01";

        // Extract the variant number after the dot
        const lastNumber = parseInt(lastVariant.noRek.split('.')[1]);
        return String(lastNumber + 1).padStart(2, '0');
    }

    static async Insert(
        name: string,
        jenisId: string,
        noRek?: string,
        units?: string[],
        creatorId?: string,
    ) {
        return db.$transaction(async (tx) => {
            const jenis = await tx.jenisRekening.findUnique({
                where: { id: jenisId }
            });

            if (!jenis) {
                throw new Error("Jenis Rekening tidak ditemukan");
            }

            const nextCode = await this.getNextVariantCode(jenisId);
            const fullCode = `${jenis.code}.${nextCode}`;

            return tx.rekening.create({
                data: {
                    name,
                    noRek: fullCode,
                    jenisId,
                    units: {
                        connect: units?.map(unit => ({ id: unit }))
                    },
                }
            })
        })
    }

    static async FindAll() {
        return db.rekening.findMany({
            include: {
                units: true,
                jenisRekening: true,
            }
        })
    }

    static async FindOne(id: string) {
        return db.rekening.findUnique({
            where: { id },
            include: {
                units: true,
                jenisRekening: true,
            }
        })
    }

    static async FindByUserId(id: string) {
        return db.rekening.findMany({
            where: {
                units: {
                    some: {
                        users: {
                            some: {
                                id
                            }
                        }
                    }
                }
            }
        })
    }

    static async Update(
        id: string,
        name: string,
        jenisId: string,
        noRek?: string,
        units?: string[],
    ) {
        return db.rekening.update({
            where: { id },
            data: {
                name,
                noRek,
                jenisId,
                units: {
                    set: units?.map(unit => ({ id: unit }))
                },
            }
        })
    }

    static async Delete(id: string) {
        return db.rekening.delete({
            where: { id }
        })
    }
}

export default RekeningRepository;