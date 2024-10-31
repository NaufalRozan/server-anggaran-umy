import DataUnitRepository from "./du.repository";
import { CreateDataUnitInput } from "./du.schema";

class DataUnitService {
    static async createDataUnit(
        dataUnitData: CreateDataUnitInput,
    ) {
        return DataUnitRepository.Insert(
            dataUnitData
        )
    }

    static async findAllDataUnit() {
        return DataUnitRepository.FindAll()
    }

    static async findOneDataUnit(id: string) {
        return DataUnitRepository.FindOne(id)
    }

    static async updateDataUnit(unitId: string, id: string) {
        return DataUnitRepository.Update(
            id,
            unitId
        )
    }

    static async deleteDataUnit(id: string) {
        return DataUnitRepository.Delete(id)
    }
}

export default DataUnitService;