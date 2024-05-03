import { Table, Column, Model, Sequelize, PrimaryKey, Default, DataType } from 'sequelize-typescript'
import { PdvEntity } from "@/domain/entities/pdv";
import { DateDataType, IntegerDataType } from 'sequelize';

@Table({ tableName: 'pdv' })
export class PdvModelMysql extends Model<PdvEntity> {
    @PrimaryKey
    @Default(DataType)
    @Column({ type: DataType.INTEGER })
    public id: IntegerDataType;
    @Column({ type: DataType.STRING })
    public boutique: String;
    @Column({ type: DataType.STRING })
    public nom: String;
    @Column({ type: DataType.STRING })
    public prenom: String;
    @Column({ type: DataType.STRING })
    public tel: String;
    @Column({ type: DataType.STRING })
    public email: String;
    @Column({ type: DataType.STRING })
    public pwd: String;
    @Column({ type: DataType.STRING })
    public code_comptable : String;
    @Column({ type: DataType.STRING })
    public rne : String;
    @Column({ type: DataType.STRING })
    public cin : String;
    @Column({ type: DataType.STRING })
    public rne_file : String;
    @Column({ type: DataType.STRING })
    public cin_file : String;
    @Column({ type: DataType.DATE })
    public date_add : DateDataType;
    @Column({ type: DataType.INTEGER })
    public status : IntegerDataType;
    @Column({ type: DataType.STRING })
    public adresse : String;
    @Column({ type: DataType.STRING })
    public ville : String;
    @Column({ type: DataType.STRING })
    public secteur : String;
    @Column({ type: DataType.INTEGER })
    public deleted : IntegerDataType;
    @Column({ type: DataType.STRING })
    public supp : String;
    @Column({ type: DataType.STRING })
    public source : String;
    @Column({ type: DataType.STRING })
    public cp : String;
    @Column({ type: DataType.STRING })
    public longitude : String;
    @Column({ type: DataType.STRING })
    public latitude : String;
    @Column({ type: DataType.STRING })
    public reference_weryou : String;
    

}