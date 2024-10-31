import { db } from "../../config/prisma";
import { CreateKpiInput } from "./kpi.schema";


class KpiRepository {
    static async Insert(
        kpiData: CreateKpiInput,
        createdById?: string
    ) {
        return db.kpi.create({
            data: {
                kpiCode: kpiData.kpiCode,
                name: kpiData.name,
                sifat: kpiData.sifat,
                year: kpiData.year,
                bidangId: kpiData.bidangId,
                primary_pic_id: kpiData.primaryPICId,
                createdById,
                standard: kpiData.standard ?? null,
                baseline: kpiData.baseline ?? null,
                target: kpiData.target ?? null,
                secondary_pic_id: kpiData.secondaryPICId ?? null,
            },
        })
    }

    static async FindAll() {
        return db.kpi.findMany({
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
                ma: true
            }
        })
    }

    static async FindManyByUserId(id: string) {
        return db.kpi.findMany({
            where: {
                OR: [
                    {
                        primary_pic: {
                            users: {
                                some: {
                                    id
                                }
                            }
                        }
                    },
                    {
                        secondary_pic: {
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
                primary_pic: true,
                secondary_pic: true,
                bidang: true,
                MaOnKpi: true,
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
                baseline: kpiData.baseline,
                target: kpiData.target,
                year: kpiData.year,
                bidangId: kpiData.bidangId,
                primary_pic_id: kpiData.primaryPICId,
                secondary_pic_id: kpiData.secondaryPICId,
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