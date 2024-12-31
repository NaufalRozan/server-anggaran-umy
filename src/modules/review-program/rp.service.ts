import MaRepository from "../mata-anggaran/ma.repository";
import ReviewProgramRepository from "./rp.repository";
import { CreateReviewProgramInput } from "./rp.schema";

class ReviewProgramService {
    static async upsertReviewProgram(
        id: string,
        rpData: CreateReviewProgramInput
    ){
        const proker = await MaRepository.FindOneMatoIndicator(id)
        if(!proker) {
            throw new Error("Proker not found")
        }

        return ReviewProgramRepository.Upsert(id, rpData)
    }

    static async createReviewProgram(
        rpData: CreateReviewProgramInput
    ){
        return ReviewProgramRepository.Insert(rpData)
    }

    static async findAllReviewProgram(prokerId?: string){
        return ReviewProgramRepository.findAll(prokerId)
    }

    static async findReviewProgramById(id: string){
        return ReviewProgramRepository.findById(id)
    }

    static async updateReviewProgram(
        id: string,
        rpData: CreateReviewProgramInput
    ){
        return ReviewProgramRepository.update(id, rpData)
    }

    static async deleteReviewProgram(id: string){
        return ReviewProgramRepository.delete(id)
    }
}

export default ReviewProgramService;