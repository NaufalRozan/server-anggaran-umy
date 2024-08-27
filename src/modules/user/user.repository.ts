import { db } from "../../config/prisma";

class UserRepository {
    static async Insert(username: string, password: string, salt: string) {
        return db.user.create({
            data: {
                username,
                password,
                salt,
            }
        })
    }

    static async FindByUsername(username: string) {
        return db.user.findFirst({
            where: {
                username
            }
        })
    }

    static async FindById(id: string) {
        return db.user.findUnique({
            where: {
                id
            }
        })
    }

    static async FindAll() {
        return db.user.findMany();
    }

}

export default UserRepository;