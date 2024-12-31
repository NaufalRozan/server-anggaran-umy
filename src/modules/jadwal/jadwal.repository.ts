import { db } from "../../config/prisma";
import { CreateJadwalInput } from "./jadwal.schema";
import { Prisma } from "@prisma/client";

class JadwalRepository {
    static async Upsert(jadwalData: CreateJadwalInput) {
        // Create an array of upsert operations
        const upsertOperations = jadwalData.unitId.map(unitId =>
            db.jadwal.upsert({
                where: {
                    unitId: unitId, // Use each individual unit ID
                },
                update: {
                    name: jadwalData.name,
                    startDate: jadwalData.dateRange.from,
                    endDate: jadwalData.dateRange.to,
                },
                create: {
                    name: jadwalData.name,
                    unitId: unitId,
                    startDate: jadwalData.dateRange.from,
                    endDate: jadwalData.dateRange.to,
                }
            })
        );

        // Use Promise.all to execute all upsert operations concurrently
        return Promise.all(upsertOperations);
    }

    static async Insert(jadwalData: CreateJadwalInput) {
        return db.jadwal.create({
            data: {
                name: jadwalData.name,
                unitId: jadwalData.unitId[0],
                startDate: jadwalData.dateRange.from,
                endDate: jadwalData.dateRange.to,
            }
        })
    }

    static async FindOneById(id: string) {
        return db.jadwal.findUnique({
            where: {
                id,
            }
        })
    }

    static async FindOneByUnitId(unitId: string) {
        return db.jadwal.findUnique({
            where: {
                unitId,
            }
        })
    }

    static async FindAll(id?: string, unitId?: string, name?: string) {
        return db.jadwal.findMany({
            where: {
                id,
                unitId,
                name,
            },
            include: {
                unit: true,
            }
        });
    }


    static async Update(jadwalData: CreateJadwalInput) {
        return db.jadwal.update({
            where: {
                unitId: jadwalData.unitId[0],
            },
            data: {
                name: jadwalData.name,
                startDate: jadwalData.dateRange.from,
                endDate: jadwalData.dateRange.to,
            }
        })
    }

    static async Delete(id: string) {
        return db.jadwal.delete({
            where: {
                id,
            }
        })
    }
}

export default JadwalRepository;