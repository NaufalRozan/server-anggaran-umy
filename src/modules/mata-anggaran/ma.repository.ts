import { db } from "../../config/prisma";

class MaRepository {
    static async getNextMACode(indicatorId: string) {
        const lastVariant = await db.ma.findFirst({
            where: { indicatorId: indicatorId },
            orderBy: { maCode: 'desc' }
        });

        if (!lastVariant) return "01";

        // Extract the variant number after the dot
        const lastNumber = parseInt(lastVariant.maCode.split('.')[2]);
        return String(lastNumber + 1).padStart(2, '0');
    }

    static async Insert(
        name: string,
        indicatorId: string,
        maCode?: string,
        creatorId?: string,
    ) {
        return db.$transaction(async (tx) => {
            const indicator = await tx.kpi.findUnique({
                where: { id: indicatorId }
            });

            if (!indicator) {
                throw new Error("Indikator tidak ditemukan");
            }

            const nextCode = await this.getNextMACode(indicatorId);
            const fullCode = `${indicator.kpiCode}.${nextCode}`;

            return tx.ma.create({
                data: {
                    name,
                    maCode: fullCode,
                    indicatorId,
                    createdById: creatorId
                }
            })
        })
    }

    static async InsertMatoIndicator(
        maId: string,
        kpiId: string,
        unitId: string,
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
                unitId,
                uraian,
                output,
                startDate: dateRange.from,
                endDate: dateRange.to,
                createdById: creatorId
            }
        })
    }

    static async FindAll(
        year?: string,
        indicatorId?: string
    ) {
        return db.ma.findMany({
            where: {
                indicator: {
                    id: indicatorId,
                    tahun: year
                }
            },
            include: {
                indicator: {
                    select: {
                        tahun: true,
                        name: true
                    }
                }
            }
        })
    }

    static async FindMatoIndicator(
        kpiId: string,
        unitId: string
    ) {
        return db.maOnKpi.findMany({
            where: {
                kpiId,
                unitId,
            },
            include: {
                KPI: true,
                MA: true,
                Pembelian: true,
                ReviewProgram: true,
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
                        rekening: true,
                        pagu: true,
                        ma_to_indicator: true
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
        indicatorId: string,
        maCode?: string,
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