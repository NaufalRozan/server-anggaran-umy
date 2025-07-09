import UnitRepository from "../unit/unit.repository";
import JadwalPencairanRepository from "./jadwal-pencairan.repository";
import { CreateJadwalPencairanInput } from "./jadwal-pencairan.schema";

class JadwalPencairanService {
    static async createJadwalPencairan(jadwalPencairanData: CreateJadwalPencairanInput) {
        jadwalPencairanData.unitId.forEach(async unitId => {
            const jadwalPencairanExist = await JadwalPencairanRepository.FindOneByUnitIdAndTahun(unitId, jadwalPencairanData.tahun)
            if (jadwalPencairanExist) {
                const unit = await UnitRepository.FindOne(unitId)
                throw new Error(`Jadwal Pencairan already exist for unit : ${unit?.name}`)
            }
        })

        return JadwalPencairanRepository.Insert(jadwalPencairanData)
    }

    static async findAllJadwalPencairan(unitId?: string, tahun?: string, periode?: string) {
        return JadwalPencairanRepository.FindAll(unitId, tahun, periode)
    }

    static async findJadwalPencairanById(id: string) {
        return JadwalPencairanRepository.FindOneById(id)
    }

    static async findJadwalPencairanByUnitIdAndTahun(unitId: string, tahun: string) {
        return JadwalPencairanRepository.FindOneByUnitIdAndTahun(unitId, tahun)
    }

    static async updateJadwalPencairan(id: string, jadwalPencairanData: CreateJadwalPencairanInput) {
        return JadwalPencairanRepository.Update(id, jadwalPencairanData)
    }

    static async deleteJadwalPencairan(id: string) {
        return JadwalPencairanRepository.Delete(id)
    }
}

export default JadwalPencairanService;