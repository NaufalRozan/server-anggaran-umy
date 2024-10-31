import PembelianRepository from "./pembelian.repository";
import { CreatePembelianInput } from "./pembelian.schema";


class PembelianService {
    static async createPembelian(
        pembelianData: CreatePembelianInput,
        creatorId?: string
    ) {
        return PembelianRepository.Insert(
            pembelianData.rekeningId,
            pembelianData.prokerId,
            pembelianData.uraian,
            pembelianData.satuan,
            creatorId ?? undefined
        )
    }

    static async findAllPembelian() {
        return PembelianRepository.FindAll()
    }

    static async findOnePembelian(id: string) {
        return PembelianRepository.FindOne(id)
    }

    static async updatePembelian(pembelianData: CreatePembelianInput, id: string) {
        return PembelianRepository.Update(
            id,
            pembelianData.rekeningId,
            pembelianData.prokerId,
            pembelianData.uraian,
            pembelianData.satuan
        )
    }

    static async deletePembelian(id: string) {
        return PembelianRepository.Delete(id)
    }
}

export default PembelianService;