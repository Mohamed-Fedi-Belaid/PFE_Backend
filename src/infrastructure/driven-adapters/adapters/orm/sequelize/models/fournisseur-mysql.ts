import { Table, Column, Model, Sequelize, PrimaryKey, Default, DataType } from 'sequelize-typescript'
import { FournisseurEntity } from "@/domain/entities/fournisseur";
import { IntegerDataType } from 'sequelize';

@Table({ tableName: 'fournisseur' })
export class FournisseurModelMysql extends Model<FournisseurEntity> {
    @PrimaryKey
    @Default(DataType)
    @Column({ type: DataType.INTEGER })
    public id: IntegerDataType;
    @Column({ type: DataType.STRING })
    public nom : string; 
    @Column({ type: DataType.STRING })
    public boutique : string; 
    @Column({ type: DataType.STRING })
    public login : string; 
    @Column({ type: DataType.STRING })
    public pwd : string; 
    @Column({ type: DataType.STRING })
    public code_comptable  : string; 
    @Column({ type: DataType.STRING })
    public tva : string; 
    @Column({ type: DataType.STRING })
    public rib : string; 
    @Column({ type: DataType.STRING })
    public banque : string; 
    @Column({ type: DataType.STRING })
    public contact : string; 
    @Column({ type: DataType.INTEGER })
    public etat: IntegerDataType;
    @Column({ type: DataType.STRING })
    public tel : string; 
    @Column({ type: DataType.STRING })
    public adresse : string; 
    @Column({ type: DataType.STRING })
    public ville : string; 
    @Column({ type: DataType.DATE })
    public date_add : Date; 
    @Column({ type: DataType.STRING })
    public email : string; 
    @Column({ type: DataType.STRING })
    public juridique : string; 
    @Column({ type: DataType.STRING })
    public pour : string; 

    @Column({ type: DataType.STRING })
    public commission : string; 
    @Column({ type: DataType.STRING })
    public cin : string; 
    @Column({ type: DataType.STRING })
    public cin_photo : string;
    @Column({ type: DataType.STRING })
    public tva_img : string;
    @Column({ type: DataType.INTEGER })
    public demande : IntegerDataType;
    @Column({ type: DataType.STRING })
    public rib_photo : string;
    @Column({ type: DataType.STRING })
    public mode : string;
    @Column({ type: DataType.STRING })
    public cp : string;
    @Column({ type: DataType.STRING })
    public source : string;

    
}