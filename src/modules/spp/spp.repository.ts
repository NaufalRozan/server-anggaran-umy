
import { db } from "../../config/prisma";
import { CreateSPPInput } from "./spp.schema";

class SPPRepository {
    static async Insert(dataSpp: CreateSPPInput) {
        const lastSpp = await db.sPP.findFirst({
            orderBy: { id: 'desc' }
        })

        const counter = lastSpp ? lastSpp.noSpp.split('/')[0] : 1
        const sppNumber = `${counter}/SPP/TI-X/${dataSpp.tahun}`;

        const periodeSPMU = await db.periodeSPMU.findFirst({
            where: {
                id: dataSpp.periodeSPMUId
            }
        })

        if (!periodeSPMU) {
            throw new Error("Periode SPMU tidak ditemukan")
        }

        const spp = await db.sPP.create({
            data: {
                tahun: dataSpp.tahun,
                noSpp: sppNumber,
                periodeSPMUId: dataSpp.periodeSPMUId,
                MaOnKpi: {
                    connect: dataSpp.proker.map(proker => ({
                        id: proker.prokerId
                    })),
                }
            },
        })

        await db.$transaction(async (tx) => {
            for (let i = 0; i < dataSpp.proker.length; i++) {
                const proker = dataSpp.proker[i];
                const maOnKpi = await db.maOnKpi.findFirst({
                    where: {
                        id: proker.prokerId
                    }
                })

                if (!maOnKpi) {
                    throw new Error("Proker tidak ditemukan")
                }

                await db.maOnKpi.update({
                    where: {
                        id: proker.prokerId
                    },
                    data: {
                        anggaranDiminta: (maOnKpi.anggaranDiminta ?? 0) + proker.diminta,
                    }
                })
            }
        })
        
        await db.jadwalPencairan.update({
            where: {
                id: periodeSPMU.jadwalPencairanId
            },
            data: {
                tunggakanSPJ: {
                    increment: 1
                }
            }
        })

        return spp;
    }

    static async FindAll(year?: string, unitId?: string, periode?: string) {
        return db.sPP.findMany({
            where: {
                tahun: year,
                periodeSPMUId: periode
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                MaOnKpi: {
                    include: {
                        MA: true,
                        Pembelian: true
                    }
                }
            }
        });
    }

    static async FindManyRekomended(year?: string, unitId?: string, periodeId?: string) {
        return db.sPP.findMany({
            where: {
                tahun: year,
                periodeSPMUId: periodeId,
                otorisasi: true,
                status: true,
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
            }
        });
    }

    static async FindOne(id: string) {
        return db.sPP.findUnique({
            where: {
                id
            },
        })
    }

    static async FindOneSPPFromUnit(unitId: string, periodeId: string, sppId: string, tahun: string) {
        return db.maOnKpi.findMany({
            where: {
                sPPId: sppId,
            },
            include: {
                Unit: {
                    include: {
                        PaguAnggaran: true,
                        JadwalPencairan: {
                            include: {
                                PeriodeSPMU: {
                                    include: {
                                        SPP: true
                                    }
                                }
                            }
                        }
                    }
                },
                MA: true
            }
        })
    }

    static async Update(
        id: string,
        otorisasi?: boolean,
        status?: boolean
    ) {
        return db.sPP.update({
            where: {
                id
            },
            data: {
                otorisasi: otorisasi,
                status: status,
            }
        })
    }
    static async UpdateOtorisasi(
        id: string,
        otorisasi?: boolean,
    ) {
        return db.sPP.update({
            where: {
                id
            },
            data: {
                otorisasi: otorisasi,
            }
        })
    }
    static async UpdateStatus(
        id: string,
        status?: boolean
    ) {
        return db.sPP.update({
            where: {
                id
            },
            data: {
                status: status,
            }
        })
    }

    static async UpdateStatusBiroKeu(
        id: string,
        statusBiroKeu?: boolean
    ) {
        return db.maOnKpi.update({
            where: {
                id
            },
            data: {
                statusBiroKeu: statusBiroKeu,
            }
        })
    }
}

export default SPPRepository;