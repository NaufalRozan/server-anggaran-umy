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

    static async getUserById(userId: string){
        return UserRepository.FindById(userId);
    }

    static async changePassword(userId: string, newPassword: string, oldPassword: string) {
        const user = await UserRepository.FindById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const validPassword = verifyPassword({
            hash: user?.password,
            salt: user?.salt,
            candidatePassword: oldPassword
        })

        const { hash, salt } = hashPassword(newPassword);

        if (validPassword) {
            await UserRepository.UpdatePassword(userId, hash, salt);
        } else {
            throw new Error("Password is incorrect");
        }
    }
}

export default UserService