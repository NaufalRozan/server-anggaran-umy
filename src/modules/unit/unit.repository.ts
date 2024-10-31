import { db } from "../../config/prisma";
import { CreateUnitInput } from "./unit.schema";

class UnitRepository {
    static async Insert(unitData: CreateUnitInput) {
        return db.unit.create({
            data: {
                name: unitData.name,
                bidangId: unitData.bidangId
            }
        })
    }

    static async FindAll() {
        return db.unit.findMany();
    }

    static async FindOne(id: string) {
        return db.unit.findUnique({
            where: {
                id
            },
        })
    }

    static async Update(id: string, unitData: CreateUnitInput) {
        return db.unit.update({
            where: {
                id
            },
            data: {
                name: unitData.name,
                bidangId: unitData.bidangId
            }
        })
    }

    static async Delete(id: string) {
        return db.unit.delete({
            where: {
                id
            }
        })
    }
}

export default UnitRepository