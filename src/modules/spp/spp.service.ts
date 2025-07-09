import { stat } from "fs";
import SPPRepository from "./spp.repository";
import { CreateSPPInput } from "./spp.schema";
import MaRepository from "../mata-anggaran/ma.repository";

class SPPService {
    static async createSPP(
        sppData: CreateSPPInput
    ) {
        return SPPRepository.Insert(sppData)
    }

    static async getAllSPP(year?: string, unitId?: string, periode?: string) {
        return SPPRepository.FindAll(year, unitId, periode)
    }

    static async getSPPById(id: string) {
        return SPPRepository.FindOne(id)
    }

    static async getSPPRekomendasi(year?: string, unitId?: string, periodeId?: string) {
        return SPPRepository.FindManyRekomended(year, unitId, periodeId)
    }

    static async getSPPFromUnit(unitId: string, periodeId: string, sppId: string, tahun: string) {
        return SPPRepository.FindOneSPPFromUnit(unitId, periodeId, sppId, tahun)
    }

    static async updateSPPOtorisasi(
        id: string,
    ) {
        const spp = await SPPRepository.FindOne(id)
        if (!spp) {
            throw new Error("SPP tidak ditemukan")
        }

        return SPPRepository.UpdateOtorisasi(id, !spp.otorisasi)
    }

    static async updateSPPStatus(
        id: string,
    ) {
        const spp = await SPPRepository.FindOne(id)
        if (!spp) {
            throw new Error("SPP tidak ditemukan")
        }

        return SPPRepository.UpdateStatus(id, !spp.status)
    }

    static async updateStatusBiroKeuangan(
        id: string,
    ) {
        const proker = await MaRepository.FindOneMatoIndicator(id)
        if (!proker) {
            throw new Error("SPP tidak ditemukan")
        }

        return SPPRepository.UpdateStatusBiroKeu(id, !proker.statusBiroKeu)
    }
}

export default SPPService;