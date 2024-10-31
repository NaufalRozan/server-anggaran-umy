import UnitRepository from "./unit.repository";
import { CreateUnitInput } from "./unit.schema";


class UnitService {
    static async getAllUnit() {
        return UnitRepository.FindAll()
    }

    static async getUnitById(id: string) {
        return UnitRepository.FindOne(id)
    }

    static async createUnit(unitData: CreateUnitInput) {
        return UnitRepository.Insert(unitData)
    }

    static async updateUnit(id: string, unitData: CreateUnitInput) {
        return UnitRepository.Update(id, unitData)
    }

    static async deleteUnit(id: string) {
        return UnitRepository.Delete(id)
    }

}

export default UnitService