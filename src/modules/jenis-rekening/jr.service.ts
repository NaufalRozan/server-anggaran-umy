import JenisRekeningRepository from "./jr.repository";
import { CreateJenisRekeningInput } from "./jr.schema";

class JenisRekeningService {
    static async createJenisRekening(
        jenisRekeningData: CreateJenisRekeningInput,
        creatorId?: string
    ) {
        return JenisRekeningRepository.Insert(
            jenisRekeningData.name,
            creatorId ?? undefined
        )
    }

    static async findAllJenisRekening() {
        return JenisRekeningRepository.FindAll()
    }

    static async findOneJenisRekening(id: string) {
        return JenisRekeningRepository.FindOne(id)
    }

    static async updateJenisRekening(jenisRekeningData: CreateJenisRekeningInput, id: string) {
        return JenisRekeningRepository.Update(
            id,
            jenisRekeningData.name,
        )
    }

    static async deleteJenisRekening(id: string) {
        return JenisRekeningRepository.Delete(id)
    }
}

export default JenisRekeningService;