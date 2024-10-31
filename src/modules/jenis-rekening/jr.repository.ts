import { db } from "../../config/prisma";

class JenisRekeningRepository {
    static async Insert(
        name: string,
        creatorId?: string,
    ) {
        return db.jenisRekening.create({
            data: {
                name,
            }
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