import { db } from "../../config/prisma";
import { CreateJadwalPencairanInput } from "./jadwal-pencairan.schema";

class JadwalPencairanRepository {
    static async Insert(
        jadwalPencairanData: CreateJadwalPencairanInput
    ) {
        const insertOperations = jadwalPencairanData.unitId.map(unitId =>
            db.jadwalPencairan.create({
                data: {
                    unitId: unitId,
                    tahun: jadwalPencairanData.tahun,
                    batasKegiatan: jadwalPencairanData.batasKegiatan,
                    tunggakanSPJ: jadwalPencairanData.tunggakanSPJ,
                    PeriodeSPMU: {
                        create: jadwalPencairanData.periodeSPMU.map(periode => ({
                            periode: periode.periode,
                            startDatePengajuan: periode.dateRange.from,
                            endDatePengajuan: periode.dateRange.to,
                        }))
                    }
                }
            })
        );

        // Use Promise.all to execute all upsert operations concurrently
        return Promise.all(insertOperations);
    }

    static async FindAll(
        unitId?: string,
        tahun?: string,
        periode?: string,
    ) {
        return db.jadwalPencairan.findMany({
            where: {
                unitId,
                tahun,
            },
            include: {
                unit: true,
                PeriodeSPMU: true,
            }
        })
    }

    static async FindOneById(id: string) {
        return db.jadwalPencairan.findUnique({
            where: {
                id,
            }
        })
    }

    static async FindOneByUnitIdAndTahun(unitId: string, tahun: string) {
        return db.jadwalPencairan.findFirst({
            where: {
                unitId,
                tahun,
            },
            include: {
                PeriodeSPMU: true,
            }
        })
    }

    static async Update(
        id: string,
        jadwalPencairanData: CreateJadwalPencairanInput
    ) {
        return db.jadwalPencairan.update({
            where: {
                id,
            },
            data: {
                unitId: jadwalPencairanData.unitId[0],
                tahun: jadwalPencairanData.tahun,
                batasKegiatan: jadwalPencairanData.batasKegiatan,
                tunggakanSPJ: jadwalPencairanData.tunggakanSPJ,
                PeriodeSPMU: {
                    create: jadwalPencairanData.periodeSPMU.map(periode => ({
                        periode: periode.periode,
                        startDate: periode.dateRange.from,
                        endDate: periode.dateRange.to,
                    }))
                }
            }
        })
    }

    static async Delete(id: string) {
        return db.jadwalPencairan.delete({
            where: {
                id,
            }
        })
    }
}

export default JadwalPencairanRepository;