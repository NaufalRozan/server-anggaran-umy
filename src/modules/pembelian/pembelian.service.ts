import KpiRepository from "../indikator-kinerja/kpi.repository";
import MaRepository from "../mata-anggaran/ma.repository";
import PaguRepository from "../pagu/pagu.repository";
import PembelianRepository from "./pembelian.repository";
import { CreatePembelianInput } from "./pembelian.schema";


class PembelianService {
    static async createPembelian(
        pembelianData: CreatePembelianInput,
        creatorId?: string
    ) {
        const ma = await MaRepository.FindOneMatoIndicator(pembelianData.prokerId)
        if (!ma) {
            throw new Error("MA tidak ditemukan")
        }

        const kpi = await KpiRepository.FindOne(ma.kpiId)
        if (!kpi) {
            throw new Error("KPI tidak ditemukan")
        }

        const pagu = await PaguRepository.FindByJadwalIdAndUnitId(kpi.tahun, ma.unitId)
        if (!pagu) {
            throw new Error("data Pagu tidak ditemukan")
        }

        return PembelianRepository.Insert(
            pembelianData.rekeningId,
            pembelianData.prokerId,
            pembelianData.uraian,
            pembelianData.satuan,
            pembelianData.jumlah,
            pembelianData.nilaiSatuan,
            pembelianData.kuantitas,
            pagu.id,
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
            pembelianData.satuan,
            pembelianData.jumlah,
            pembelianData.nilaiSatuan,
            pembelianData.kuantitas
        )
    }

    static async deletePembelian(id: string) {
        return PembelianRepository.Delete(id)
    }
}

export default PembelianService;