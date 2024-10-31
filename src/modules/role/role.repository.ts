import { db } from "../../config/prisma";


class RoleRepository {
    static async Insert(name: string, permissionNames?: string[]) {
        return db.role.create({
            data: {
                name,
                permissions: {
                    connect: permissionNames?.map(permission => ({ id: permission }))
                }
            }
        })
    }

    static async FindAll() {
        return db.role.findMany({
            include: {
                permissions: true
            }
        })
    }

    static async FindOne(id: string) {
        return db.role.findUnique({
            where: {
                id
            },
            include: {
                permissions: true
            }
        })
    }

    static async Update(id: string, name: string, permissions?: string[]) {
        return db.role.update({
            where: {
                id
            },
            data: {
                name,
                permissions: {
                    set: permissions?.map(permission => ({ id: permission }))
                }
            }
        })
    }

    static async Delete(id: string) {
        return db.role.delete({
            where: {
                id
            }
        })
    }
}

export default RoleRepository