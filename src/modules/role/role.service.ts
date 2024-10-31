import { db } from "../../config/prisma";
import RoleRepository from "./role.repository";
import { CreateRoleInput } from "./role.schema";

class RoleService {
    static async createRole(roleName: string, permissionNames?: string[]) {
        const permissions = await Promise.all(
            (permissionNames ?? []).map(async (permissionName) => {
                return await db.permission.upsert({
                    where: { name: permissionName },
                    update: {},
                    create: { name: permissionName },
                })
            })
        )
        const role = await RoleRepository.Insert(roleName, permissions.map(permission => permission.id))

        return role
    }

    static async getAllRoles() {
        return RoleRepository.FindAll()
    }

    static async getRoleById(id: string) {
        return RoleRepository.FindOne(id)
    }

    static async updateRole(id: string, roleName: string, permissionNames?: string[]) {
        const permissions = await Promise.all(
            (permissionNames ?? []).map(async (permissionName) => {
                return await db.permission.upsert({
                    where: { name: permissionName },
                    update: {},
                    create: { name: permissionName },
                })
            })
        )
        const role = await RoleRepository.Update(id, roleName, permissions.map(permission => permission.id))

        return role
    }

    static async deleteRole(id: string) {
        const role = await RoleRepository.FindOne(id)
        if (!role) {
            throw new Error('Role not found')
        }

        return RoleRepository.Delete(id)
    }
}

export default RoleService