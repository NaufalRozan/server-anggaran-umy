import MaRepository from "./ma.repository";
import { CreateMaInput, CreateMatoIndicatorInput } from "./ma.schema";

class MaService {
    static async createMa(
        maData: CreateMaInput,
        creatorId?: string
    ) {
        return MaRepository.Insert(
            maData.name,
            maData.maCode,
            maData.indicatorId,
            creatorId,
        )
    }

    static async findAllMa() {
        return MaRepository.FindAll()
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
            maData.maCode,
            maData.indicatorId
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
            createMatoIndicatorInput.uraian,
            createMatoIndicatorInput.output,
            {
                from: createMatoIndicatorInput.dateRange.from!,
                to: createMatoIndicatorInput.dateRange.to!
            },
            creatorId ?? undefined
        )
    }

    static async findMatoIndicator(kpiId: string) {
        return MaRepository.FindMatoIndicator(kpiId)
    }

    static async findOneMatoIndicator(id: string) {
        return MaRepository.FindOneMatoIndicator(id)
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