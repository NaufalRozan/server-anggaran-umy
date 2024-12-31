import KpiRepository from "../indikator-kinerja/kpi.repository";
import PaguRepository from "../pagu/pagu.repository";
import MaRepository from "./ma.repository";
import { CreateMaInput, CreateMatoIndicatorInput } from "./ma.schema";

class MaService {
    static async createMa(
        maData: CreateMaInput,
        creatorId?: string
    ) {
        return MaRepository.Insert(
            maData.name,
            maData.indicatorId,
            maData.maCode,
            creatorId,
        )
    }

    static async findAllMa(
        year?: string,
        indicatorId?: string
    ) {
        return MaRepository.FindAll(
            year,
            indicatorId
        )
    }

    static async findOneMa(id: string) {
        return MaRepository.FindOne(id)
    }

    static async findManyByUserId(id: string) {
        return MaRepository.FindManyByUserId(id)
    }

    static async updateMa(maData: CreateMaInput, id: string) {
        return MaRepository.Update(
            id,
            maData.name,
            maData.indicatorId,
            maData.maCode,
        )
    }

    static async deleteMa(id: string) {
        return MaRepository.Delete(id)
    }

    static async createMatoIndicator(
        createMatoIndicatorInput: CreateMatoIndicatorInput,
        creatorId?: string
    ) {
        return MaRepository.InsertMatoIndicator(
            createMatoIndicatorInput.maId,
            createMatoIndicatorInput.kpiId,
            createMatoIndicatorInput.unitId,
            createMatoIndicatorInput.uraian,
            createMatoIndicatorInput.output,
            {
                from: createMatoIndicatorInput.dateRange.from!,
                to: createMatoIndicatorInput.dateRange.to!
            },
            creatorId ?? undefined
        )
    }

    static async findMatoIndicator(kpiId: string, unitId: string) {
        const [proker, kpi] = await Promise.all([
            MaRepository.FindMatoIndicator(kpiId, unitId),
            KpiRepository.FindOne(kpiId)
        ])
        if (!kpi) {
            throw new Error('Kpi not found')
        }

        const pagu = await PaguRepository.FindByJadwalIdAndUnitId(kpi.tahun, unitId)
        return {
            proker,
            kpi,
            pagu
        }
    }

    static async findOneMatoIndicator(id: string) {
        const proker = await MaRepository.FindOneMatoIndicator(id);
        if (!proker) {
            throw new Error('Proker not found')
        }

        const kpi = await KpiRepository.FindOne(proker.kpiId);
        if (!kpi) {
            throw new Error('Kpi not found')
        }

        const [ma, pagu] = await Promise.all([
            proker?.maId ? MaRepository.FindOne(proker.maId) : Promise.resolve({}),
            proker?.unitId ? PaguRepository.FindByJadwalIdAndUnitId(kpi.tahun, proker.unitId) : Promise.resolve({})
        ]);

        return {
            proker,
            kpi: kpi || {},
            ma: ma || {},
            pagu: pagu || {}
        }
    }

    static async updateMatoIndicator(
        createMatoIndicatorInput: CreateMatoIndicatorInput,
        id: string
    ) {
        return MaRepository.UpdateMatoIndicator(
            id,
            createMatoIndicatorInput.maId,
            createMatoIndicatorInput.kpiId,
            createMatoIndicatorInput.uraian,
            createMatoIndicatorInput.output,
            {
                from: createMatoIndicatorInput.dateRange.from!,
                to: createMatoIndicatorInput.dateRange.to!
            }
        )
    }

    static async deleteMatoIndicator(id: string) {
        return MaRepository.DeleteMatoIndicator(id)
    }
}

export default MaService;