import SPMURepository from "./spmu.repository";
import { CreateSPMUInput } from "./spmu.schema";

class SPMUService {

    static async createSPMU(
        sppData: CreateSPMUInput
    ) {
        return SPMURepository.Insert(sppData)
    }

    static async getAllSPMU(year?: string, unitId?: string, periode?: string) {
        return SPMURepository.FindAll(year, unitId, periode)
    }

    static async getRecomendedSPMU(year?: string, unitId?: string) {
        return SPMURepository.FindRecomended(year, unitId)
    }

    static async updateSPMUOtorisasiBiro(
        id: string,
    ) {
        const spp = await SPMURepository.FindOne(id)
        if (!spp) {
            throw new Error("SPP tidak ditemukan")
        }

        return SPMURepository.UpdateOtorisasiBiro(id, !spp.biroApproval)
    }

    static async updateSPMUOtorisasiWR2(
        id: string,
    ) {
        const spp = await SPMURepository.FindOne(id)
        if (!spp) {
            throw new Error("SPP tidak ditemukan")
        }

        return SPMURepository.UpdateOtorisasiWR2(id, !spp.wr2Approval)
    }

}

export default SPMUService;