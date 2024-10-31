import { db } from "../../config/prisma"

class PermissionRepository {
    static async Insert(name: string, desc?: string) {
        return db.permission.create({
            data: {
                name,
                description: desc
            }
        })
    }

    static async FindAll() {
        return db.permission.findMany()
    }

    static async FindOne(id: string) {
        return db.permission.findUnique({
            where: {
                id
            }
        })
    }

    static async Update(id: string, name: string, desc?: string) {
        return db.permission.update({
            where: {
                id
            },
            data: {
                name,
                description: desc
            }
        })
    }

    static async Delete(id: string) {
        return db.permission.delete({
            where: {
                id
            }
        })
    }
}

export default PermissionRepository