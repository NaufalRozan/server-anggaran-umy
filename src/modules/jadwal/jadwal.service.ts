import JadwalRepository from "./jadwal.repository";
import { CreateJadwalInput } from "./jadwal.schema";

class JadwalService {
    static async upsertJadwal(jadwalData: CreateJadwalInput) {
        return JadwalRepository.Upsert(jadwalData)
    }

    static async createJadwal(jadwalData: CreateJadwalInput) {
        // const jadwalExist = await JadwalRepository.FindOne(jadwalData.tahun)
        // if (jadwalExist) {
        //     throw new Error('Jadwal already exist')
        // }

        return JadwalRepository.Insert(jadwalData)
    }

    static async findAllJadwal(id?: string, unitId?: string, name?: string) {
        return JadwalRepository.FindAll(id, unitId, name)
    }

    static async findJadwalById(id: string) {
        return JadwalRepository.FindOneById(id)
    }

    static async findJadwalByUnitId(unitId: string) {
        return JadwalRepository.FindOneByUnitId(unitId)
    }

    static async updateJadwal(jadwalData: CreateJadwalInput) {
        return JadwalRepository.Update(jadwalData)
    }

    static async deleteJadwal(id: string) {
        return JadwalRepository.Delete(id)
    }
}

export default JadwalService