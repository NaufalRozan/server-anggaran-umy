import { db } from "../../config/prisma";
import { CreateCategoryUnitInput, CreateUnitInput } from "./unit.schema";

class UnitRepository {
    static async Insert(unitData: CreateUnitInput) {
        return db.unit.create({
            data: {
                name: unitData.name,
                categoryId: unitData.categoryId
            }
        })
    }

    static async FindAll() {
        return db.unit.findMany({
            select: {
                id: true,
                name: true,
                category_unit: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true
            },
        });
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
                categoryId: unitData.categoryId
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

    static async InsertCategoryUnit(categoryUnitData: CreateCategoryUnitInput) {
        return db.categoryUnit.create({
            data: {
                name: categoryUnitData.name,
            }
        })
    }

    static async FindAllCategoryUnit() {
        return db.categoryUnit.findMany({
            include: {
                Unit: true
            }
        });
    }

    static async FindOneCategoryUnit(id: string) {
        return db.categoryUnit.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                createdAt: true,
                updatedAt: true,
                Unit: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
    }

    static async UpdateCategoryUnit(id: string, categoryUnitData: CreateCategoryUnitInput) {
        return db.categoryUnit.update({
            where: {
                id
            },
            data: {
                name: categoryUnitData.name,
            }
        })
    }

    static async DeleteCategoryUnit(id: string) {
        return db.categoryUnit.delete({
            where: {
                id
            }
        })
    }
}

export default UnitRepository