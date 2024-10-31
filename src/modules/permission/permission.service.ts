import PermissionRepository from "./permission.repository";


class PermissionService {
    static async createPermission(name: string, desc?: string) {
        if (!desc){
            return PermissionRepository.Insert(name)
        }
        return PermissionRepository.Insert(name, desc)
    }

    static async getAllPermission() {
        return PermissionRepository.FindAll()
    }

    static async getPermissionById(id: string) {
        return PermissionRepository.FindOne(id)
    }

    static async updatePermission(id: string, name: string, desc?: string) {
        if (!desc){
            return PermissionRepository.Update(id, name)
        }
        return PermissionRepository.Update(id, name, desc)
    }

    static async deletePermission(id: string) {
        return PermissionRepository.Delete(id)
    }
}

export default PermissionService