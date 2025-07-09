import { db } from "../../config/prisma";
import { CreateJadwalLaporanInput } from "./jl.schema";

class JadwalLaporanRepository {
    static async Upsert(jadwalLaporanData: CreateJadwalLaporanInput) {
        const upsertOperations = jadwalLaporanData.unitId.map(unitId =>
            db.jadwalLaporan.upsert({
                where: {
                    unitId: unitId,
                },
                update: {
                    name: jadwalLaporanData.name,
                    startDate: jadwalLaporanData.dateRange.from,
                    endDate: jadwalLaporanData.dateRange.to,
                },
                create: {
                    name: jadwalLaporanData.name,
                    unitId: unitId,
                    startDate: jadwalLaporanData.dateRange.from,
                    endDate: jadwalLaporanData.dateRange.to,
                }
            })
        );
        return Promise.all(upsertOperations);
    }

    static async Insert(jadwalLaporanData: CreateJadwalLaporanInput) {
        return db.jadwalLaporan.create({
            data: {
                name: jadwalLaporanData.name,
                unitId: jadwalLaporanData.unitId[0],
                startDate: jadwalLaporanData.dateRange.from,
                endDate: jadwalLaporanData.dateRange.to,
            }
        })
    }

    static async FindOneById(id: string) {
        return db.jadwalLaporan.findUnique({
            where: {
                id,
            }
        })
    }

    static async FindOneByUnitId(unitId: string) {
        return db.jadwalLaporan.findUnique({
            where: {
                unitId,
            }
        })
    }

    static async FindAll(id?: string, unitId?: string, name?: string) {
        return db.jadwalLaporan.findMany({
            where: {
                id,
                unitId,
                name,
            },
            include: {
                unit: true,
            }
        })
    }

    static async Update(jadwalLaporanData: CreateJadwalLaporanInput) {
        return db.jadwalLaporan.update({
            where: {
                id: jadwalLaporanData.unitId[0],
            },
            data: {
                name: jadwalLaporanData.name,
                startDate: jadwalLaporanData.dateRange.from,
                endDate: jadwalLaporanData.dateRange.to,
            }
        })
    }

    static async Delete(id: string) {
        return db.jadwalLaporan.delete({
            where: {
                id,
            }
        })
    }
}

export default JadwalLaporanRepository