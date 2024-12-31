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

    static async createCategoryUnit(categoryUnitData: CreateUnitInput) {
        return UnitRepository.InsertCategoryUnit(categoryUnitData)
    }

    static async getAllCategoryUnit() {
        return UnitRepository.FindAllCategoryUnit()
    }

    static async getCategoryUnitById(id: string) {
        return UnitRepository.FindOneCategoryUnit(id)
    }

    static async updateCategoryUnit(id: string, categoryUnitData: CreateUnitInput) {
        return UnitRepository.UpdateCategoryUnit(id, categoryUnitData)
    }

    static async deleteCategoryUnit(id: string) {
        return UnitRepository.DeleteCategoryUnit(id)
    }
}

export default UnitService