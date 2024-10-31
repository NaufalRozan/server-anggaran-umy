import UserRepository from "../user/user.repository"
import VmRepository from "./vm.repository"
import { CreateVmInput } from "./vm.schema"

class VmService {
    static async createVisiMisi(visiMisiData: CreateVmInput, creatorId?: string) {
        return VmRepository.Insert(
            visiMisiData.visi,
            visiMisiData.misi,
            visiMisiData.tujuan,
            visiMisiData.keterangan,
            visiMisiData.tahun,
            creatorId ?? undefined,
            visiMisiData.subUnitId ?? undefined,
            visiMisiData.unitId ?? undefined
        )
    }
 
    static async findAllVisiMisi(id: string) {
        return VmRepository.FindAll()
    }

    static async findOneVisiMisi(id: string) {
        return VmRepository.FindOne(id)
    }

    static async findManyByUserId(id: string) {
        const vm = await VmRepository.FindManyByUserId(id)

        return vm
    }

    static async updateVisiMisi(visiMisiData: CreateVmInput, id: string) {
        return VmRepository.Update(
            id,
            visiMisiData.visi,
            visiMisiData.misi,
            visiMisiData.tujuan,
            visiMisiData.keterangan,
            visiMisiData.tahun,
            visiMisiData.subUnitId ?? undefined,
            visiMisiData.unitId ?? undefined
        )
    }

    static async deleteVisiMisi(id: string) {
        return VmRepository.Delete(id)
    }
}

export default VmService