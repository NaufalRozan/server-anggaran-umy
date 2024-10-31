import { hashPassword, verifyPassword } from "../../utils/hash";
import RoleRepository from "../role/role.repository";
import UserRepository from "./user.repository";
import { CreateUserInput, UpdateUserInput } from "./user.schema";

class UserService {
    static async LoginUser(username: string, password: string) {
        const user = await UserRepository.FindByUsername(username);
        if (!user) {
            throw new Error("Invalid username");
        };

        const isValidPassword = verifyPassword({
            candidatePassword: password,
            salt: user.salt,
            hash: user.password
        });

        if (!isValidPassword) {
            throw new Error("Password is incorrect");
        };

        const payload = {
            id: user.id,
            username: user.username,
            role: user.role,
        }
        return payload
    }

    static async createUser(input: CreateUserInput) {
        const { hash, salt } = hashPassword(input.password);

        const role = await RoleRepository.FindOne(input.roleId ?? "");
        if (!role) {
            input.roleId = undefined;
        }
        
        const user = await UserRepository.Insert(
            input.username,
            hash,
            salt,
            input.roleId,
        );

        return user;
    }

    static async getAllUsers(userId: string) {
        

        const users = await UserRepository.FindAll();

        return users
    }

    static async getUserById(userId: string) {
        const user = await UserRepository.FindById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        return {
            ...user,
            unitData: [
                ...user.unit,
            ],
        };
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

        if (validPassword) {
            const { hash, salt } = hashPassword(newPassword);
            await UserRepository.UpdatePassword(userId, hash, salt);
        } else {
            throw new Error("Password is incorrect");
        }
    }

    static async updateUser(userId: string, input: UpdateUserInput) {
        const {
            username,
            roleId,
        } = input;

        const user = await UserRepository.FindById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        await UserRepository.Update(
            userId,
            username,
            roleId ?? undefined,
        );
    }

    static async deleteUser(userId: string) {
        const user = await UserRepository.FindById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        await UserRepository.Delete(userId);
    }

    static async connectUserUnitAndSubUnit(userId: string, unitIds: string[]) {
        const user = await UserRepository.FindById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        await UserRepository.ConnectUnitAndSubUnit(userId, unitIds);
    }


    static async disconnectUserUnitAndSubUnit(userId: string, unitIds: string[]) {
        const user = await UserRepository.FindById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        await UserRepository.DisconnectUnitAndSubUnit(userId, unitIds);
    }

}

export default UserService