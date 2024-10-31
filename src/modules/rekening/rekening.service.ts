import RekeningRepository from "./rekening.repository";
import { CreateRekeningInput } from "./rekening.schema";

class RekeningService {
    static async createRekening(
        rekeningData: CreateRekeningInput,
        creatorId?: string
    ) {
        return RekeningRepository.Insert(
            rekeningData.name,
            rekeningData.noRek,
            rekeningData.jenisId,
            rekeningData.units,
            creatorId ?? undefined
        )
    }

    static async findAllRekening() {
        return RekeningRepository.FindAll()
    }

    static async findOneRekening(id: string) {
        return RekeningRepository.FindOne(id)
    }

    static async findManyByUserId(id: string) {
        return RekeningRepository.FindByUserId(id)
    }

    static async updateRekening(rekeningData: CreateRekeningInput, id: string) {
        return RekeningRepository.Update(
            id,
            rekeningData.name,
            rekeningData.noRek,
            rekeningData.jenisId,
            rekeningData.units,
        )
    }

    static async deleteRekening(id: string) {
        return RekeningRepository.Delete(id)
    }
}

export default RekeningService;