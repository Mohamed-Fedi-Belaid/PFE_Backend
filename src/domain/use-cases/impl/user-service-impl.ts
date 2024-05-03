import { Adapter, Service } from "@tsclean/core";
import { UserModel } from "@/domain/entities/user";
import { UserParams } from "@/domain/entities/user";
import { IUserService } from "@/domain/use-cases/user-service";
import { USER_REPOSITORY, IUserRepository } from "@/domain/entities/contracts/user-repository";
import bcrypt from 'bcrypt';

@Service()
export class UserServiceImpl implements IUserService {
    constructor(
        @Adapter(USER_REPOSITORY) private readonly UserRepository: IUserRepository
    ) {
    }

    async UserService(data: UserParams): Promise<UserModel> {
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(data.password, 10); // Utilisez 10 pour le nombre de tours de hachage

        // Créer un nouvel utilisateur avec le mot de passe haché
        const newUser = await this.UserRepository.UserRepository({
            ...data,
            password: hashedPassword // Remplacer le mot de passe en clair par le mot de passe haché
        });

        return newUser;
    }

    async getUserByEmail(email: string): Promise<UserModel | null> {
        return await this.UserRepository.getUserByEmail(email);
    }

    async deleteUser(id: string): Promise<void> {
        await this.UserRepository.deleteUser(id);
    }

    async updateUser(id: string, data: UserParams): Promise<UserModel> {
        return await this.UserRepository.updateUser(id, data);
    }

    async getAllUsers(): Promise<UserModel[]> {
        return await this.UserRepository.getAllUsers();
    }

    async getUserById(id: string): Promise<UserModel | null> {
        return await this.UserRepository.getUserById(id);
    }
}
