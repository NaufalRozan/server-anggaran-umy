import { db } from "../../config/prisma";
import { CreateSPPInput } from "./spp.schema";

class SPPRepository {
    static async FindAll(year?: string, unitId?: string) {
        return db.sPP.findMany({
            where: {
                kpi: {
                    tahun: year,
                    primary_pic: {
                        Unit: {
                            some: {
                                id: unitId
                            }
                        }
                    },
                    MaOnKpi: {
                        every: {
                            // ReviewProgram: {
                            //     rekomendasi: "Direkomendasikan"
                            // }
                        }
                    }
                },

            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                kpi: {
                    include: {
                        MaOnKpi: {
                            include: {
                                Pembelian: true,
                            }
                        },
                        primary_pic: {
                            select: {
                                Unit: true,
                            }
                        },
                    }
                }
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

    static async Update(
        id: string,
        dataSpp: CreateSPPInput,
    ) {
        return db.sPP.update({
            where: {
                id
            },
            data: {
                otorisasi: dataSpp.otorisasi,
                status: dataSpp.status,
            }
        })
    }
}

export default SPPRepository;