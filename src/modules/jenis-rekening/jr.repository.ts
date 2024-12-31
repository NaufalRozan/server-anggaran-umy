import { db } from "../../config/prisma";

class JenisRekeningRepository {
    static async getNextProductCode() {
        const jk = await db.jenisRekening.findFirst({
            orderBy: { code: 'desc' }
        });

        if (!jk) return "01";
        const lastNumber = parseInt(jk.code);
        return String(lastNumber + 1).padStart(2, '0');
    }

    static async Insert(
        name: string,
        creatorId?: string,
    ) {
        return db.$transaction(async (tx) => {
            const nextCode = await this.getNextProductCode();

            const existingJk = await tx.jenisRekening.findUnique({
                where: {
                    code: nextCode
                }
            })

            if (existingJk) {
                throw new Error("Kode Jenis Rekening sudah digunakan");
            }

            return tx.jenisRekening.create({
                data: {
                    name,
                    code: nextCode,
                }
            })
        })
    }

    static async FindAll() {
        return db.jenisRekening.findMany()
    }

    static async FindOne(id: string) {
        return db.jenisRekening.findUnique({
            where: { id },
        })
    }

    static async Update(
        id: string,
        name: string,
    ) {
        return db.jenisRekening.update({
            where: { id },
            data: {
                name,
            }
        })
    }

    static async Delete(id: string) {
        return db.jenisRekening.delete({
            where: { id }
        })
    }
}

export default JenisRekeningRepository;