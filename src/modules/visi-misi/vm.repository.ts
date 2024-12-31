import { db } from "../../config/prisma";


class VmRepository {
    static async Insert(visi: string, misi: string, tujuan: string, keterangan: string, tahun: string, createdById?: string, subUnitId?: string, unitId?: string) {
        return await db.visiMisi.create({
            data: {
                visi,
                misi,
                tujuan,
                keterangan,
                tahun: tahun,
                createdById,
                unitId
            }
        })
    }

    static async FindAll(unitId?: string, subUnitId?: string) {
        return await db.visiMisi.findMany({
            // where: {
            //     unitId: unitId ?? "",
            //     subUnitId: subUnitId ?? ""
            // },
            include: {
                unit: true
            }
        })
    }

    static async FindOne(id: string) {
        return await db.visiMisi.findUnique({
            where: {
                id
            }
        })
    }

    static async FindOneByYear(year: string, subUnitId?: string, unitId?: string) {
        return db.visiMisi.findFirst({
            where: {
                tahun: year,
                unitId
            }
        })
    }

    static async FindManyByUserId(id: string) {
        return db.visiMisi.findMany({
            where: {
                OR: [
                    {
                        unit: {
                            users: {
                                some: {
                                    id
                                }
                            }
                        }
                    }
                ]
            },
            include: {
                unit: true
            }
        });
    }

    static async Update(id: string, visi: string, misi: string, tujuan: string, keterangan: string, tahun: string, subUnitId?: string, unitId?: string) {
        return await db.visiMisi.update({
            where: {
                id
            },
            data: {
                visi,
                misi,
                tujuan,
                keterangan,
                tahun: tahun,
                unitId
            }
        })
    }

    static async Delete(id: string) {
        return await db.visiMisi.delete({
            where: {
                id
            }
        })
    }
}

export default VmRepository