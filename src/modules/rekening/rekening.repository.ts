import { db } from "../../config/prisma";

class RekeningRepository {
    static async Insert(
        name: string,
        noRek: string,
        jenisId: string,
        units?: string[],
        creatorId?: string,
    ) {
        return db.rekening.create({
            data: {
                name,
                noRek,
                jenisId,
                units: {
                    connect: units?.map(unit => ({ id: unit }))
                },
            }
        })
    }

    static async FindAll() {
        return db.rekening.findMany({
            include: {
                units: true,
                jenisRekening: true,
            }
        })
    }

    static async FindOne(id: string) {
        return db.rekening.findUnique({
            where: { id },
            include: {
                units: true,
                jenisRekening: true,
            }
        })
    }

    static async FindByUserId(id: string) {
        return db.rekening.findMany({
            where: {
                units: {
                    some: {
                        users: {
                            some: {
                                id
                            }
                        }
                    }
                }
            }
        })
    }

    static async Update(
                id: string,
                name: string,
                noRek: string,
                jenisId: string,
                units?: string[],
            ) {
                return db.rekening.update({
                    where: { id },
                    data: {
                        name,
                        noRek,
                        jenisId,
                        units: {
                            set: units?.map(unit => ({ id: unit }))
                        },
                    }
                })
            }

    static async Delete(id: string) {
                return db.rekening.delete({
                    where: { id }
                })
            }
        }

export default RekeningRepository;