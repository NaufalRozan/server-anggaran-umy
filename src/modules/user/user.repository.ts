import { db } from "../../config/prisma";

class UserRepository {
    static async Insert(username: string, password: string, salt: string, roleId?: string, unitIds?: string[]) {
        return db.user.create({
            data: {
                username,
                password,
                salt,
                roleId: roleId ?? null,
                unit: {
                    connect: unitIds?.map(id => ({ id }))
                }
            }
        })
    }

    static async ConnectUnitAndSubUnit(userId: string, unitIds: string[]) {
        return db.user.update({
            where: {
                id: userId
            },
            data: {
                unit: {
                    set: unitIds.map(id => ({ id }))
                },
            },
        })
    }


    static async DisconnectUnitAndSubUnit(userId: string, unitIds: string[]) {
        return db.user.update({
            where: {
                id: userId
            },
            data: {
                unit: {
                    disconnect: unitIds.map(id => ({ id }))
                },
            },
        })
    }

    static async FindByUsername(username: string) {
        return db.user.findFirst({
            where: {
                username
            },
            select: {
                id: true,
                username: true,
                unit: true,
                salt: true,
                password: true,
                role: {
                    include: {
                        permissions: true
                    }
                }
            },
        })
    }

    static async FindById(id: string) {
        return db.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                username: true,
                unit: {
                    include: {
                        Jadwal: {
                            orderBy: {
                                tahun: "desc"
                            }
                        }
                    }
                },
                salt: true,
                password: true,
                role: {
                    include: {
                        permissions: true
                    }
                },
            },
        })
    }

    static async FindAll() {
        return db.user.findMany({
            select: {
                id: true,
                username: true,
                unit: true,
                role: {
                    include: {
                        permissions: true
                    }
                },
                createdAt: true,
                updatedAt: true
            },
        });
    }

    static async Update(id: string, username: string, roleId?: string, unitIds?: string[]) {
        return db.user.update({
            where: {
                id
            },
            data: {
                username,
                roleId,
                unit: {
                    set: unitIds?.map(id => ({ id }))
                }
            }
        })
    }

    static async UpdatePassword(id: string, password: string, salt: string) {
        return db.user.update({
            where: {
                id
            },
            data: {
                password,
                salt
            }
        })
    }

    static async Delete(id: string) {
        return db.user.delete({
            where: {
                id
            }
        })
    }

}

export default UserRepository;