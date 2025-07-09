import { db } from "../../config/prisma";
import { CreateSPMUInput } from "./spmu.schema";

class SPPRepository {

    static async Insert(dataSpp: CreateSPMUInput) {
        const lastSpmu = await db.sPMU.findFirst({
            orderBy: { id: 'desc' }
        })

        const spmuCounter = lastSpmu ? lastSpmu.noSpmu.split('/')[0] : 1

        const spmuNumber = `${spmuCounter}/SPMU/X/${dataSpp.tahun}`;

        const periodeSPMU = await db.periodeSPMU.findFirst({
            where: {
                id: dataSpp.periodeSPMUId
            }
        })

        if (!periodeSPMU) {
            throw new Error("Periode SPMU tidak ditemukan")
        }

        const spmu = await db.sPMU.create({
            data: {
                tahun: dataSpp.tahun,
                noSpmu: spmuNumber,
                periodeSPMUId: dataSpp.periodeSPMUId,
                sppId: dataSpp.sppId,
            }
        })

        return spmu;
    }

    static async FindOne(id: string) {
        return db.sPMU.findUnique({
            where: {
                id,
            }
        })
    }

    static async FindAll(year?: string, unitId?: string, periode?: string) {
        return db.sPMU.findMany({
            where: {
                tahun: year,
                periodeSPMUId: periode
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                spp: true
            }
        })

    }

    static async FindRecomended(year?: string, unitId?: string) {
        return db.maOnKpi.findMany({
            where: {
                SPP: {
                    SPMU: {
                        tahun: year,
                        wr2Approval: true,
                        biroApproval: true,
                    }
                },
                KPI: {
                    primary_pic: {
                        Unit: {
                            some: {
                                id: unitId
                            }
                        }
                    }
                }
            },
            include: {
                ProgresSPJ: true,
                SPJ: true,
                MA: true,
                SPP: {
                    include: {
                        SPMU: true,
                    }
                },
                KPI: {
                    include: {
                        primary_pic: true
                    }
                },
            }
        })
    }

    static async UpdateOtorisasiBiro(
        id: string,
        otorisasi?: boolean,
    ) {
        return db.sPMU.update({
            where: {
                id
            },
            data: {
                biroApproval: otorisasi,
                tanggal: new Date()
            }
        })
    }

    static async UpdateOtorisasiWR2(
        id: string,
        otorisasi?: boolean,
    ) {
        return db.sPMU.update({
            where: {
                id
            },
            data: {
                wr2Approval: otorisasi,
            }
        })
    }

}

export default SPPRepository;