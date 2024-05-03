import { Table, Column, Model, Sequelize, PrimaryKey, Default, DataType } from 'sequelize-typescript'
import { UserModel } from "@/domain/entities/user";

@Table({ tableName: 'utilisateurs' })
export class UserModelPg extends Model<UserModel> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({ type: DataType.UUID })
    public id: string;

    @Column({ type: DataType.STRING })
    public name: string;
    @Column({ type: DataType.STRING })
    public email: string;
    @Column({ type: DataType.STRING })
    public password: string;
}