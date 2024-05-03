import {UserModel, UserParams} from "@/domain/entities/user";
export const USER_SERVICES = 'USER_SERVICES';
        
export interface IUserService {
    getUserByEmail(email: any): Promise<UserModel | null>;
    UserService: (data: UserParams) => Promise<UserModel>
    deleteUser: (id: string) => Promise<void>;
    updateUser: (id: string, data: UserParams) => Promise<UserModel>;
    getAllUsers: () => Promise<UserModel[]>;
    getUserById: (id: string) => Promise<UserModel | null>;
}


