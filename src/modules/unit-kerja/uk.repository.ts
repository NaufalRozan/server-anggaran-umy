import { db } from "../../config/prisma";

class UnitKerjaRepository{
    static async Insert(nama: string, userId: string, tahun: string){
        return db.unitKerja.create({
            data: {
                name: nama,
                user_id: userId,
                tahun: String(tahun)
            }
        })
    }
    static async InsertWithGol(nama: string, golonganUnitKerjaId: string, userId: string, tahun: string){
        return db.unitKerja.create({
            data: {
                name: nama,
                user_id: userId,
                tahun: String(tahun)
            }
        })
    }

    static async FindAll(){
        return db.unitKerja.findMany(
            {
                include: {
                    GolonganUnitKerja: true
                }
            }
        );
    }

    static async FindOne(id: string){
        return db.unitKerja.findUnique({
            where: {
                id: id
            }
        })
    }

    static async FindOneByYear(year: string){
        return db.unitKerja.findMany({
            where: {
                tahun: year
            }
        })
    }

    static async Update(id: string, nama: string, tahun: string){
        return db.unitKerja.update({
            where: {
                id: id
            },
            data: {
                name: nama,
                tahun: tahun
            }
        })
    }

    static async Delete(id: string){
        return db.unitKerja.delete({
            where: {
                id: id
            }
        })
    }
}

export default UnitKerjaRepository