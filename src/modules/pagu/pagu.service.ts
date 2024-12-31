import PaguRepository from "./pagu.repository"
import { CreatePaguInput } from "./pagu.schema"

class PaguService {
    // static async upsertPagu(paguData: CreatePaguInput) {
    //     return PaguRepository.Upsert(paguData)
    // }

    static async createPagu(paguData: CreatePaguInput) {
        const paguExist = await PaguRepository.FindByJadwalIdAndUnitId(paguData.tahun, paguData.unitId[0])
        if (paguExist) {
            throw new Error('Pagu already exist')
        }

        return PaguRepository.Insert(paguData)
    }

    static async findAllPagu(tahun?: string) {
        return PaguRepository.FindAll(tahun)
    }

    static async findByJadwalId(jadwalId: string) {
        return PaguRepository.FindByJadwalId(jadwalId)
    }

    static async findByUnitId(unitId: string) {
        return PaguRepository.FindByUnitId(unitId)
    }

    static async findByJadwalIdAndUnitId(jadwalId: string, unitId: string) {
        return PaguRepository.FindByJadwalIdAndUnitId(jadwalId, unitId)
    }

    static async updatePagu(paguId: string, pagu: number) {
        return PaguRepository.UpdatePagu(paguId, pagu)
    }

    static async deletePagu(paguId: string) {
        return PaguRepository.DeletePagu(paguId)
    }
}

export default PaguService