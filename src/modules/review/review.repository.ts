import { db } from "../../config/prisma";
import { CreateReviewInput } from "./review.schema";

class ReviewRepository {
    static async Insert(
        reviewData: CreateReviewInput
    ) {
        return db.review.create({
            data: {
                tahun: reviewData.tahun,
                unitId: reviewData.unitId,
                reviewUmum: reviewData.reviewUmun,
                tanggapanAkhir: reviewData.tanggapanAkhir
            }
        })
    }

    static async Upsert(
        id: string,
        reviewData: CreateReviewInput
    ) {
        return db.review.upsert({
            where: {
                id,
                
            },
            update: {
                tahun: reviewData.tahun,
                unitId: reviewData.unitId,
                reviewUmum: reviewData.reviewUmun,
                tanggapanAkhir: reviewData.tanggapanAkhir,
            },
            create: {
                tahun: reviewData.tahun,
                unitId: reviewData.unitId,
                reviewUmum: reviewData.reviewUmun,
                tanggapanAkhir: reviewData.tanggapanAkhir,
            },
        });
    }


    static async FindAll(tahun?: string, unitId?: string) {
        return db.review.findMany({
            where: {
                tahun,
                unitId
            },
            select: {
                id: true,
                tahun: true,
                unitId: true,
                reviewUmum: true,
                tanggapanAkhir: true,
                unit: true,
                createdAt: true,
                updatedAt: true
            },
        })
    }

    static async FindOneByTahunAndUnitId(tahun: string, unitId?: string) {
        return db.review.findFirst({
            where: {
                tahun,
                unitId
            },
            select: {
                id: true,
                tahun: true,
                unitId: true,
                reviewUmum: true,
                tanggapanAkhir: true
            }
        })
    }

    static async FindById(id: string) {
        return db.review.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                tahun: true,
                unitId: true,
                reviewUmum: true,
                tanggapanAkhir: true
            }
        })
    }

    static async Update(
        id: string,
        reviewData: CreateReviewInput
    ) {
        return db.review.update({
            where: {
                id
            },
            data: {
                tahun: reviewData.tahun,
                unitId: reviewData.unitId,
                reviewUmum: reviewData.reviewUmun,
                tanggapanAkhir: reviewData.tanggapanAkhir
            }
        })
    }

    static async Delete(id: string) {
        return db.review.delete({
            where: {
                id
            }
        })
    }
}

export default ReviewRepository;