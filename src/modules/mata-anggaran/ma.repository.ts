import { db } from "../../config/prisma";

class MaRepository {
    static async Insert(
        name: string,
        maCode: string,
        indicatorId: string,
        creatorId?: string,
    ) {
        return db.ma.create({
            data: {
                name,
                maCode,
                indicatorId,
                createdById: creatorId
            }
        })
    }

    static async InsertMatoIndicator(
        maId: string,
        kpiId: string,
        uraian: string,
        output: string,
        dateRange: {
            from: Date,
            to: Date
        },
        creatorId?: string
    ) {
        return db.maOnKpi.create({
            data: {
                maId,
                kpiId,
                uraian,
                output,
                startDate: dateRange.from,
                endDate: dateRange.to,
                createdById: creatorId
            }
        })
    }

    static async FindAll() {
        return db.ma.findMany({
            include: {
            }
        })
    }

    static async FindMatoIndicator(
        kpiId: string,
    ) {
        return db.maOnKpi.findMany({
            where: {
                kpiId,
            },
            include: {
                KPI: true,
                MA: true
            }
        })
    }

    static async FindOneMatoIndicator(id: string) {
        return db.maOnKpi.findUnique({
            where: {
                id
            },
            include: {
                KPI: true,
                MA: true,
                Pembelian: {
                    include: {
                        rekening: true
                    }
                },
            }
        })
    }

    static async FindOne(id: string) {
        return db.ma.findUnique({
            where: {
                id
            },
            include: {
            }
        })
    }

    static async FindManyByUserId(id: string) {
        return db.ma.findMany({
            where: {
                OR: [
                ]
            },
            include: {
            }
        })
    }

    static async Update(
        id: string,
        name: string,
        maCode: string,
        indicatorId: string
    ) {
        return db.ma.update({
            where: {
                id
            },
            data: {
                name,
                maCode,
                indicatorId,
            }
        })
    }

    static async UpdateMatoIndicator(
        id: string,
        maId: string,
        kpiId: string,
        uraian: string,
        output: string,
        dateRange: {
            from: Date,
            to: Date
        }
    ) {
        return db.maOnKpi.update({
            where: {
                id
            },
            data: {
                uraian,
                output,
                startDate: dateRange.from,
                endDate: dateRange.to
            }
        })
    }

    static async Delete(id: string) {
        return db.ma.delete({
            where: {
                id
            }
        })
    }

    static async DeleteMatoIndicator(id: string) {
        return db.maOnKpi.delete({
            where: {
                id
            }
        })
    }
}

export default MaRepository;