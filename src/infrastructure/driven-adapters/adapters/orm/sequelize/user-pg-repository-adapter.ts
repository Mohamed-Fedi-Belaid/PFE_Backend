import { IUserRepository } from "@/domain/entities/contracts/user-repository";
import {UserModel, UserParams} from "@/domain/entities/user";
import {UserModelPg}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";

export class UserPgRepositoryAdapter implements IUserRepository {
    async UserRepository(data: UserParams): Promise<UserModel> {
        return await UserModelPg.create(data);
    }
    async deleteUser(id: string): Promise<void> {
        await UserModelPg.destroy({ where: { id } });
    }
    async updateUser(id: string, data: UserParams): Promise<UserModel> {
        const user = await UserModelPg.findByPk(id);
        if (user) {
            await user.update(data);
            return user;
        }
        return null;
    }

    async getAllUsers(): Promise<UserModel[]> {
        return await UserModelPg.findAll();
    }

    async getUserById(id: string): Promise<UserModel | null> {
        return await UserModelPg.findByPk(id);
    }
    async getUserByEmail(email: string): Promise<UserModel | null> {
        const user = await UserModelPg.findOne({ where: { email } });
        return user ? user.toJSON() : null;
    }


}
