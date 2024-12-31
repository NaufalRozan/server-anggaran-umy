import BidangRepository from "../bidang/bidang.repository";
import JadwalRepository from "../jadwal/jadwal.repository";
import PaguRepository from "../pagu/pagu.repository";
import UnitRepository from "../unit/unit.repository";
import UserRepository from "../user/user.repository";
import KpiRepository from "./kpi.repository";
import { CreateKpiInput } from "./kpi.schema";


class KpiService {
    static async createKpi(
        kpiData: CreateKpiInput,
        creatorId?: string
    ) {
        const primaryPic = await UnitRepository.FindOneCategoryUnit(kpiData.primaryPICId);
        if (!primaryPic) {
            throw new Error("PIC Utama tidak ditemukan");
        }

        // Optional: Validate secondary PIC
        const secondaryPic = await UnitRepository.FindOne(kpiData.secondaryPICId ?? "");
        if (!secondaryPic) {
            kpiData.secondaryPICId = undefined;
        }

        // Validate bidang
        const bidang = await BidangRepository.FindOne(kpiData.bidangId);
        if (!bidang) {
            throw new Error("Bidang tidak ditemukan");
        }

        // Create KPIs for each unit in the primary PIC
        // const createdKPIs = [];
        // for (const unit of primaryPic.Unit) {
        //     const kpiWithUnitPIC = {
        //         ...kpiData,
        //         primaryPICId: unit.id
        //     };

        //     const createdKPI = await KpiRepository.Insert(kpiWithUnitPIC, creatorId);
        //     createdKPIs.push(createdKPI);
        // }

        return await KpiRepository.Insert(kpiData, creatorId);
    }

    static async findAllKpi(year?: string) {
        return KpiRepository.FindAll(year)
    }

    static async findOneKpi(id: string) {
        return KpiRepository.FindOne(id)
    }

    static async findManyByUserId(id: string, year?: string, unitId?: string) {
        const [kpis , pagu] = await Promise.all([
            KpiRepository.FindManyByUserId(id, year, unitId),
            PaguRepository.FindByJadwalIdAndUnitId(year ?? "",unitId ?? "")
        ])
        // const kpisConverted = kpis.map(kpi => {
        //     return {
        //         ...kpi,
        //         year: kpi.tahun
        //     }
        // })
        return {
            kpis,
            pagu,
        }
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