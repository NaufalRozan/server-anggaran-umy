import { db } from "../../config/prisma";
import { CreateDataUnitInput } from "./du.schema";

class DataUnitRepository {
    static async Insert(
        dataUnitData: CreateDataUnitInput,
    ) {
        return db.dataUnit.createMany({
            data: dataUnitData.units.map(unit => ({
                unitId: unit,
            }))
        })
    }
    
    static async FindAll() {
        return db.dataUnit.findMany(
            {
                include: {
                    DataSubUnit: true
                }
            }
        )
    }

    static async FindOne(id: string) {
        return db.dataUnit.findUnique({
            where: {
                id
            },
            include: {
                DataSubUnit: true
            }
        })
    }

    static async Update(id: string, unitId: string) {
        return db.dataUnit.update({
            where: {
                id
            },
            data: {
                unitId
            }
        })
    }

    static async Delete(id: string) {
        return db.dataUnit.delete({
            where: {
                id
            }
        })
    }
}

export default DataUnitRepository;