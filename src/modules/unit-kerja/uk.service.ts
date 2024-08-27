import { db } from "../../config/prisma";
import UnitKerjaRepository from "./uk.repository";

class UnitKerjaService {
    static async createUnitKerja(nama: string, userId: string, tahun: string) {
        return UnitKerjaRepository.Insert(nama, userId, tahun)
    }

    static async getAllUnitKerja() {
        return UnitKerjaRepository.FindAll()
    }

    static async getUnitKerjaById(id: string) {
        return UnitKerjaRepository.FindOne(id)
    }

    static async updateUnitKerja(id: string, nama: string, tahun: string) {
        return UnitKerjaRepository.Update(id, nama, tahun)
    }

    static async deleteUnitKerja(id: string) {
        return UnitKerjaRepository.Delete(id)
    }
}

export default UnitKerjaService