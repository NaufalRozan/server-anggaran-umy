import { db } from "../../config/prisma";
import { CreateReviewProgramInput } from "./rp.schema";

class ReviewProgramRepository {
    static async Upsert(
        id: string,
        rpData: CreateReviewProgramInput
    ){
        return db.reviewProgram.upsert({
            where: {
                prokerId: rpData.prokerId
            },
            update: {
                temuan: rpData.temuan,
                saran: rpData.saran,
                tanggapan: rpData.tanggapan,
                reviewAkhir: rpData.reviewAkhir,
                rekomendasi: rpData.rekomendasi
            },
            create: {
                prokerId: rpData.prokerId,
                temuan: rpData.temuan,
                saran: rpData.saran,
                tanggapan: rpData.tanggapan,
                reviewAkhir: rpData.reviewAkhir,
                rekomendasi: rpData.rekomendasi
            },
        });
    }

    static async Insert(
        rpData: CreateReviewProgramInput
    ){
        return db.reviewProgram.create({
            data: {
                prokerId: rpData.prokerId,
                temuan: rpData.temuan,
                saran: rpData.saran,
                tanggapan: rpData.tanggapan,
                reviewAkhir: rpData.reviewAkhir,
                rekomendasi: rpData.rekomendasi
            }
        })
    }

    static async findAll(prokerId?: string){
        return db.reviewProgram.findMany({
            where: {
                prokerId
            },
            select: {
                id: true,
                prokerId: true,
                temuan: true,
                saran: true,
                tanggapan: true,
                reviewAkhir: true,
                rekomendasi: true
            }
        })
    }

    static async findById(id: string){
        return db.reviewProgram.findUnique({
            where: {
                prokerId: id
            },
            select: {
                id: true,
                prokerId: true,
                temuan: true,
                saran: true,
                tanggapan: true,
                reviewAkhir: true,
                rekomendasi: true
            }
        })
    }

    static async update(
        id: string,
        rpData: CreateReviewProgramInput
    ){
        return db.reviewProgram.update({
            where: {
                id
            },
            data: {
                prokerId: rpData.prokerId,
                temuan: rpData.temuan,
                saran: rpData.saran,
                tanggapan: rpData.tanggapan,
                reviewAkhir: rpData.reviewAkhir,
                rekomendasi: rpData.rekomendasi
            }
        })
    }

    static async delete(id: string){
        return db.reviewProgram.delete({
            where: {
                id
            }
        })
    }
}

export default ReviewProgramRepository