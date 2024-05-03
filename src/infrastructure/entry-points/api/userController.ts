import { UserModel, UserParams } from "@/domain/entities/user";
import { IUserService, USER_SERVICES } from "@/domain/use-cases/user-service";
import {Mapping, Get, Post, Body, Adapter, Delete, Param, Put, Response} from "@tsclean/core";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

@Mapping('api/v1/user')
export class UserController {

    constructor(
        @Adapter(USER_SERVICES) private readonly UserService: IUserService
   ) {
   }
    @Post()
    async UserController(@Body() data: UserParams): Promise<UserModel > {
        return await this.UserService.UserService(data);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        await this.UserService.deleteUser(id);
    }   

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() data: UserParams): Promise<UserModel> {
        return await this.UserService.updateUser(id, data);
    }

    @Get('/')
    async getAllUsers(): Promise<UserModel[]> {
        return await this.UserService.getAllUsers();
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string): Promise<UserModel | null> {
        return await this.UserService.getUserById(id);
    }
    @Post('/register')
    async registerUser(@Body() userData: any): Promise<any> {
        try {
            // Get user data from request body
            const { name, email, password } = userData;

            // Check if email already exists
            const isEmailAlreadyExist = await this.UserService.getUserByEmail(email);
            if (isEmailAlreadyExist) {
                return {
                    error: true,
                    message: "Email already in use"
                };
            }

            // Create new user
            const newUser = await this.UserService.UserService({ name, email, password });

            // Return success response
            return newUser;
        } catch (error: any) {
            // Handle errors
            throw new Error(error.message);
        }
    }


    @Post('/login')
    async loginUser(@Body() userData: any, @Response() res: any): Promise<void> {
        try {
            // Récupérer les données de l'utilisateur depuis le corps de la requête
            const { email, password } = userData;

            // Vérifier si l'utilisateur existe dans la base de données
            const isUserExist: UserModel | null = await this.UserService.getUserByEmail(email);

            // Si l'utilisateur n'existe pas, renvoyer une erreur 404
            if (!isUserExist) {
                res.status(404).json({
                    status: 404,
                    success: false,
                    message: "User not found",
                });
                return;
            }

            // Vérifier si le mot de passe correspond à celui stocké en base de données
            const isPasswordMatched: boolean = await bcrypt.compare(password, isUserExist.password);

            // Si le mot de passe ne correspond pas, renvoyer une erreur 400
            if (!isPasswordMatched) {
                res.status(400).json({
                    status: 400,
                    success: false,
                    message: "Wrong password",
                });
                return;
            }

            // Créer un token JWT valide
            const token = jwt.sign(
                { _id: isUserExist.id, email: isUserExist.email },
                "YOUR_SECRET",
                {
                    expiresIn: "1d",
                }
            );

            // Renvoyer une réponse avec le token JWT
            res.status(200).json({
                status: 200,
                success: true,
                message: "Login success",
                token: token,
            });
        } catch (error: any) {
            // En cas d'erreur, renvoyer une erreur 400 avec le message d'erreur
            res.status(400).json({
                status: 400,
                message: error.message.toString(),
            });
        }
    }


    
}
