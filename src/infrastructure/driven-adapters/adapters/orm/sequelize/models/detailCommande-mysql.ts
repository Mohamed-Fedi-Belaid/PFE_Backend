import { Table, Column, Model, Sequelize, PrimaryKey, DataType, Default } from 'sequelize-typescript'
import { DetailCommandeEntity } from "@/domain/entities/detailCommande";
import { DateDataType, IntegerDataType } from 'sequelize';

@Table({ tableName: 'detail_cmd' })
export class DetailCommandeModelMysql extends Model<DetailCommandeEntity> {
    @PrimaryKey
    @Default(DataType)
    @Column({ type: DataType.INTEGER })
    public id: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public idcmd: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public id_prd: IntegerDataType;
    @Column({ type: DataType.STRING })
    public article: String;
    @Column({ type: DataType.STRING })
    public prix: String;
    @Column({ type: DataType.STRING })
    public prix_frs: String;
    @Column({ type: DataType.STRING })
    public qte: String;
    @Column({ type: DataType.INTEGER })
    public id_frs: IntegerDataType;
    @Column({ type: DataType.DATE })
    public dt: DateDataType;
    @Column({ type: DataType.INTEGER })
    public etat: IntegerDataType;
    @Column({ type: DataType.STRING })
    public code: String;
    @Column({ type: DataType.STRING })
    public frais: String;
    @Column({ type: DataType.INTEGER })
    public paye: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public recette: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public id_recette: IntegerDataType;
    @Column({ type: DataType.STRING })
    public transport: String;
    @Column({ type: DataType.INTEGER })
    public recu: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public id_retour: IntegerDataType;
    @Column({ type: DataType.DATE })
    public date_liv: DateDataType;
    @Column({ type: DataType.STRING })
    public nom: String;
    @Column({ type: DataType.STRING })
    public prenom: String;
    @Column({ type: DataType.STRING })
    public adresse: String;
    @Column({ type: DataType.STRING })
    public ville: String;
    @Column({ type: DataType.STRING })
    public cp: String;
    @Column({ type: DataType.STRING })
    public tel: String;
    @Column({ type: DataType.INTEGER })
    public imprime: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public perf: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public dispo: IntegerDataType;
    @Column({ type: DataType.STRING })
    public code_barre: String;
    @Column({ type: DataType.STRING })
    public code_barre_liv: String;

}