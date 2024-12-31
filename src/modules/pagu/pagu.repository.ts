import { randomUUID } from "crypto";
import { db } from "../../config/prisma";
import { CreatePaguInput } from "./pagu.schema";

class PaguRepository {
    // static async Upsert(paguData: CreatePaguInput) {
    //     const upsertOperations = paguData.unitId.map(unitId =>
    //         db.paguAnggaran.upsert({
    //             where: {
    //                 tahun: paguData.tahun,
    //                 unitId: unitId
    //             },
    //             update: {
    //                 pagu: paguData.pagu,
    //             },
    //             create: {
    //                 id: randomUUID(),
    //                 pagu: paguData.pagu,
    //                 tahun: paguData.tahun,
    //                 unitId: unitId
    //             }
    //         })
    //     );

    //     return Promise.all(upsertOperations);
    // }

    static async Insert(paguData: CreatePaguInput) {
        const createPagus = paguData.unitId.map(unitId =>
            db.paguAnggaran.create({
                data: {
                    pagu: paguData.pagu,
                    tahun: paguData.tahun,
                    unitId: unitId
                }
            })
        );

        return Promise.all(createPagus);
    }

    static async FindAll(tahun?: string) {
        return db.paguAnggaran.findMany({
            where: {
                tahun
            },
            select: {
                id: true,
                pagu: true,
                terpakai: true,
                tahun: true,
                unit: true,
                unitId: true,
                createdAt: true,
                updatedAt: true
            },
        })
    }

    static async FindByJadwalId(tahun: string) {
        return db.paguAnggaran.findMany({
            where: {
                tahun: tahun
            },
            select: {
                id: true,
                pagu: true,
                tahun: true,
                unit: true,
                createdAt: true,
                updatedAt: true
            },
        })
    }

    static async FindByUnitId(unitId: string) {
        return db.paguAnggaran.findMany({
            where: {
                unitId
            },
            include: {
                Pembelian: true
            }
        })
    }

    static async FindByJadwalIdAndUnitId(tahun: string, unitId: string) {
        return db.paguAnggaran.findFirst({
            where: {
                tahun,
                unitId
            },
            include: {
                Pembelian: true
            }
        })
    }

    static async UpdatePagu(paguId: string, pagu: number) {
        return db.paguAnggaran.update({
            where: {
                id: paguId
            },
            data: {
                pagu
            }
        })
    }

    static async DeletePagu(paguId: string) {
        return db.paguAnggaran.delete({
            where: {
                id: paguId
            }
        })
    }
}

export default PaguRepository;