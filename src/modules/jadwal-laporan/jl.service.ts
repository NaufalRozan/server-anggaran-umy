import JadwalLaporanRepository from "./jl.repository";
import { CreateJadwalLaporanInput } from "./jl.schema";

class JadwalLaporanService {
    static async upsertJadwalLaporan(jadwalLaporanData: CreateJadwalLaporanInput) {
        return JadwalLaporanRepository.Upsert(jadwalLaporanData)
    }

    static async createJadwalLaporan(jadwalLaporanData: CreateJadwalLaporanInput) {
        return JadwalLaporanRepository.Insert(jadwalLaporanData)
    }

    static async findAllJadwalLaporan(id?: string, unitId?: string, name?: string) {
        return JadwalLaporanRepository.FindAll(id, unitId, name)
    }

    static async findJadwalLaporanById(id: string) {
        return JadwalLaporanRepository.FindOneById(id)
    }

    static async findJadwalLaporanByUnitId(unitId: string) {
        return JadwalLaporanRepository.FindOneByUnitId(unitId)
    }

    static async updateJadwalLaporan(jadwalLaporanData: CreateJadwalLaporanInput) {
        return JadwalLaporanRepository.Update(jadwalLaporanData)
    }

    static async deleteJadwalLaporan(id: string) {
        return JadwalLaporanRepository.Delete(id)
    }
}

export default JadwalLaporanService