import { db } from "../../config/prisma";
import ReviewRepository from "./review.repository";
import { CreateReviewInput } from "./review.schema";

class ReviewService {
    static async createReview(
        reviewData: CreateReviewInput
    ) {
        return ReviewRepository.Insert(reviewData)
    }

    static async findAllReview(jadwalId?: string, unitId?: string) {
        return ReviewRepository.FindAll(jadwalId, unitId)
    }

    static async findOneReviewByTahunAndUnitId(tahun: string, unitId?: string) {
        return ReviewRepository.FindOneByTahunAndUnitId(tahun, unitId)
    }

    static async findReviewById(id: string) {
        return ReviewRepository.FindById(id)
    }

    static async updateReview(
        id: string,
        reviewData: CreateReviewInput
    ) {
        return ReviewRepository.Upsert(id, reviewData)
    }

    static async deleteReview(id: string) {
        return ReviewRepository.Delete(id)
    }
}

export default ReviewService