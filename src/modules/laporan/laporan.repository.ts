import { db } from "../../config/prisma";
import { CreateLaporanInput } from "./laporan.schema";

class LaporanRepository {
    static async Insert(inputDataLaporan: CreateLaporanInput) {
        return db.laporan.create({
            data: {
                capaian: inputDataLaporan.capaian,
                kendala: inputDataLaporan.kendala,
                perbaikan: inputDataLaporan.perbaikan,
                rtl: inputDataLaporan.rtl,
                pic: inputDataLaporan.pic,
                indikatorId: inputDataLaporan.indikatorId,
                capaian_auditor: inputDataLaporan.capaian_auditor,
                komentar: inputDataLaporan.komentar,
                rtl_auditor: inputDataLaporan.rtl_auditor,
            }
        });
    }

    static async ApproveLaporan(id: string) {
        return db.laporan.update({
            where: { id },
            data: { isApproved: true }
        });
    }

    static async Update(
        id: string,
        capaian: number,
        kendala: string,
        perbaikan: string,
        rtl: string,
        pic: string,
        capaian_auditor?: number,
        komentar?: string,
        rtl_auditor?: string
    ) {
        return db.laporan.update({
            where: {
                id
            },
            data: {
                capaian,
                kendala,
                perbaikan,
                rtl,
                pic,
                capaian_auditor,
                komentar,
                rtl_auditor,
            }
        })
    }


    static async FindAll(
        year?: string,
        indicatorId?: string
    ) {
        return db.laporan.findMany({
            where: {
                indicator: {
                    id: indicatorId,
                    tahun: year
                }
            },

            select: {
                id: true,
                capaian: true,
                capaian_auditor: true,
                kendala: true,
                perbaikan: true,
                rtl: true,
                pic: true,
                komentar: true,
                rtl_auditor: true,
                isApproved: true,
                indikatorId: true,
                createdAt: true,
                updatedAt: true,
                indicator: {
                    select: {
                        tahun: true,
                        name: true,
                        kpiCode: true,
                        target: true,
                    }
                },
                FileLaporan: {
                    select: {
                        id: true,
                        filename: true,
                        originalName: true,
                        path: true,
                        extension: true,
                        mimetype: true,
                        size: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                }
            }
        })
    }

    static async FindOne(id: string) {
        return db.laporan.findUnique({
            where: {
                id
            },
            include: {

            }
        })
    }

    static async Delete(id: string) {
        return db.laporan.delete({
            where: {
                id
            }
        })
    }
}

export default LaporanRepository;