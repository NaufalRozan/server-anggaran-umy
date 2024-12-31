import { parse } from "path";
import { db } from "../../config/prisma";
import { CreateKpiInput } from "./kpi.schema";


class KpiRepository {
    static async generateUniqueKPICode(bidangId: string, tx: any): Promise<string> {
        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
            // Get the bidang code
            const bidang = await tx.bidang.findUnique({
                where: { id: bidangId }
            });

            if (!bidang) {
                throw new Error("Bidang tidak ditemukan");
            }

            // Find the last KPI for this bidang
            const lastKPI = await tx.kpi.findFirst({
                where: { bidangId },
                orderBy: { kpiCode: 'desc' }
            });

            // Generate next code
            const nextCode = lastKPI
                ? this.incrementCode(lastKPI.kpiCode.split('.')[1])
                : '01';

            const fullCode = `${bidang.code}.${nextCode}`;

            // Check if the code is unique
            const existingKPI = await tx.kpi.findUnique({
                where: { kpiCode: fullCode }
            });

            if (!existingKPI) {
                return fullCode;
            }

            attempts++;
        }

        throw new Error("Could not generate a unique KPI code after multiple attempts");
    }
    static async getNextKPICode(bidangId: string) {
        const kpi = await db.kpi.findFirst({
            where: { bidangId },
            orderBy: { kpiCode: 'desc' }
        });

        if (!kpi) return "01";

        // Extract the variant number after the dot
        const lastNumber = parseInt(kpi.kpiCode.split('.')[1]);
        return String(lastNumber + 1).padStart(2, '0');
    }

    static incrementCode(currentCode: string): string {
        // Convert to number, increment, and pad
        const nextNumber = parseInt(currentCode) + 1;
        return String(nextNumber).padStart(2, '0');
    }

    static async Insert(
        kpiData: CreateKpiInput,
        createdById?: string
    ) {
        return db.$transaction(async (tx) => {
            const bidang = await tx.bidang.findUnique({
                where: { id: kpiData.bidangId }
            });

            if (!bidang) {
                throw new Error("Bidang tidak ditemukan");
            }

            // const fullCode = await this.generateUniqueKPICode(kpiData.bidangId, tx);

            const nextCode = await this.getNextKPICode(kpiData.bidangId);
            const fullCode = `${bidang.code}.${nextCode}`;

            return tx.kpi.create({
                data: {
                    kpiCode: fullCode,
                    name: kpiData.name,
                    sifat: kpiData.sifat,
                    tahun: kpiData.year,
                    bidangId: kpiData.bidangId,
                    primary_pic_id: kpiData.primaryPICId,
                    createdById,
                    standard: kpiData.standard ?? null,
                    baseline: kpiData.baseline ?? null,
                    target: kpiData.target ?? null,
                    secondary_pic_id: kpiData.secondaryPICId ?? null,
                },
            });
        });
    }

    static async FindAll(year?: string) {
        return db.kpi.findMany({
            where: {
                tahun: year
            },
            include: {
                primary_pic: true,
                secondary_pic: true,
                bidang: true,
            }
        })
    }

    static async FindOne(id: string) {
        return db.kpi.findUnique({
            where: {
                id
            },
            include: {
                primary_pic: true,
                secondary_pic: true,
                bidang: true,
                ma: true,

            }
        })
    }

    static async FindManyByUserId(id: string, year?: string, unitId?: string) {
        return db.kpi.findMany({
            where: {
                OR: [
                    {
                        tahun: year,
                        primary_pic: {
                            Unit: {
                                some: {
                                    id: unitId,
                                    users: {
                                        some: {
                                            id
                                        }
                                    }
                                }
                            }
                        },
                    },
                    {
                        tahun: year,
                        secondary_pic: {
                            id: unitId,
                            users: {
                                some: {
                                    id
                                }
                            }
                        },
                    }
                ],
            },
            include: {
                primary_pic: true,
                secondary_pic: true,
                bidang: true,
                MaOnKpi: {
                    include: {
                        Pembelian: true,
                        ReviewProgram: true,
                    }
                },
            }
        })
    }

    static async Update(
        id: string,
        kpiData: CreateKpiInput,
    ) {
        return db.kpi.update({
            where: {
                id
            },
            data: {
                name: kpiData.name,
                kpiCode: kpiData.kpiCode,
                sifat: kpiData.sifat,
                standard: kpiData.standard,
                baseline: kpiData.baseline ?? null,
                target: kpiData.target ?? null,
                bidangId: kpiData.bidangId ?? null,
                primary_pic_id: kpiData.primaryPICId ?? null,
                secondary_pic_id: kpiData.secondaryPICId ?? null,
            }
        })
    }

    static async Delete(id: string) {
        return db.kpi.delete({
            where: {
                id
            }
        })
    }
}

export default KpiRepository;