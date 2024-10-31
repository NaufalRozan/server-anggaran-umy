import { db } from "../../config/prisma";


class PembelianRepository {
    static async Insert(
        rekeningId: string,
        prokerId: string,
        uraian: string,
        satuan: string,
        creatorId?: string,
    ) {
        return db.pembelian.create({
            data: {
                rekeningId,
                prokerId,
                uraian,
                satuan,
            }
        })
    }

    static async FindAll() {
        return db.pembelian.findMany()
    }

    static async FindByMaId(prokerId: string) {
        return db.pembelian.findMany({
            where: { prokerId }
        })
    }

    static async FindOne(id: string) {
        return db.pembelian.findUnique({
            where: { id }
        })
    }

    static async Update(
        id: string,
        rekeningId: string,
        prokerId: string,
        uraian: string,
        satuan: string,
    ) {
        return db.pembelian.update({
            where: { id },
            data: {
                rekeningId,
                prokerId,
                uraian,
                satuan,
            }
        })
    }

    static async Delete(id: string) {
        return db.pembelian.delete({
            where: { id }
        })
    }
}

export default PembelianRepository;