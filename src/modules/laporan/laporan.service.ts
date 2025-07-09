import KpiRepository from "../indikator-kinerja/kpi.repository";
import LaporanRepository from "./laporan.repository";
import { CreateLaporanInput } from "./laporan.schema";

class LaporanService {
    static async createLaporan(
        inputDataLaporan: CreateLaporanInput
    ) {
        const indicator = await KpiRepository.FindOne(inputDataLaporan.indikatorId);
        if (!indicator) {
            throw new Error("Indikator tidak ditemukan");
        }

        return LaporanRepository.Insert(inputDataLaporan)
    }

    static async approveLaporan(id: string) {
        return LaporanRepository.ApproveLaporan(id);
    }


    static async updateLaporan(laporanData: CreateLaporanInput, id: string) {
        return LaporanRepository.Update(
            id,
            laporanData.capaian,
            laporanData.kendala,
            laporanData.perbaikan,
            laporanData.rtl,
            laporanData.pic,
            laporanData.capaian_auditor,
            laporanData.komentar,
            laporanData.rtl_auditor
        )
    }

    static async findAllLaporan(
        year?: string,
        indicatorId?: string) {
        return LaporanRepository.FindAll(
            year,
            indicatorId
        )
    }

    static async findOneLaporan(id: string) {
        return LaporanRepository.FindOne(id)
    }

    static async deleteLaporan(id: string) {
        return LaporanRepository.Delete(id)
    }
}

export default LaporanService;