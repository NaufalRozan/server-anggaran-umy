import BidangRepository from "../bidang/bidang.repository";
import UnitRepository from "../unit/unit.repository";
import UserRepository from "../user/user.repository";
import KpiRepository from "./kpi.repository";
import { CreateKpiInput } from "./kpi.schema";


class KpiService {
    static async createKpi(
        kpiData: CreateKpiInput,
        creatorId?: string
    ) {
        const primaryPic = await UnitRepository.FindOne(kpiData.primaryPICId)
        if (!primaryPic) {
            throw new Error("PIC Utama tidak ditemukan")
        }

        const secondaryPic = await UnitRepository.FindOne(kpiData.secondaryPICId ?? "")
        if (!secondaryPic) {
            kpiData.secondaryPICId = undefined
        }

        const bidang = await BidangRepository.FindOne(kpiData.bidangId)
        if (!bidang) {
            throw new Error("Bidang tidak ditemukan")
        }

        const kpi = await KpiRepository.Insert(
            kpiData,
            creatorId
        )

        return kpi
    }

    static async findAllKpi() {
        return KpiRepository.FindAll()
    }

    static async findOneKpi(id: string) {
        return KpiRepository.FindOne(id)
    }

    static async findManyByUserId(id: string) {
        return KpiRepository.FindManyByUserId(id)
    }

    static async updateKpi(kpiData: CreateKpiInput, id: string) {
        return KpiRepository.Update(
            id,
            kpiData
        )
    }

    static async deleteKpi(id: string) {
        return KpiRepository.Delete(id)
    }
}

export default KpiService;