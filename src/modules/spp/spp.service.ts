import SPPRepository from "./spp.repository";
import { CreateSPPInput } from "./spp.schema";

class SPPService {
    static async getAllSPP() {
        return SPPRepository.FindAll()
    }

    static async getSPPById(id: string) {
        return SPPRepository.FindOne(id)
    }

    static async updateSPP(
        sppData: CreateSPPInput,
        id: string
    ) {
        const spp = await SPPRepository.FindOne(id)
        if (!spp) {
            throw new Error("SPP tidak ditemukan")
        }

        return SPPRepository.Update(
            id,
            sppData
        )
    }
}

export default SPPService;