import { db } from "../../config/prisma";
import { hashPassword, verifyPassword } from "../../utils/hash";
import UserRepository from "./user.repository";
import { CreateUserInput } from "./user.schema";

class UserService {
    static async createUser(input: CreateUserInput) {
        const { username, password } = input;
        const { hash, salt } = hashPassword(password);

        const user = await UserRepository.Insert(username, hash, salt);

        return user;
    }

    static async getAllUsers() {
        return UserRepository.FindAll();
    }
}

export default UserService