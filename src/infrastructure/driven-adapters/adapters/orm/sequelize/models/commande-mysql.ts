import { Table, Column, Model, PrimaryKey, Default, DataType } from 'sequelize-typescript'
import { CommandeEntity } from "@/domain/entities/commande";
import { DateDataType, IntegerDataType } from 'sequelize';

@Table({ tableName: 'commande' })
export class CommandeModelMysql extends Model<CommandeEntity> {
    @PrimaryKey
    @Default(DataType)
    @Column({ type: DataType.INTEGER })
    public id: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public user_id: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public  facture : IntegerDataType;
    @Column({ type: DataType.STRING })
    public  ref : string;  
    @Column({ type: DataType.DATE })
    public  dt : Date;
    @Column({ type: DataType.STRING })
    public  user : string;
    @Column({ type: DataType.STRING })
    public  total : string;
    @Column({ type: DataType.STRING })
    public  frais : string;
    @Column({ type: DataType.INTEGER })
    public statut: IntegerDataType;
    @Column({ type: DataType.STRING })
    public  adresse : string;

    @Column({ type: DataType.STRING })
    public  ville : string;
    @Column({ type: DataType.STRING })
    public  cp : string;
    @Column({ type: DataType.STRING })
    public  code_barre : string;
    @Column({ type: DataType.STRING })
    public  tel : string;
    @Column({ type: DataType.DATE })
    public  date_add : DateDataType;
    @Column({ type: DataType.STRING })
    public  nom : string;
    @Column({ type: DataType.STRING })
    public  prenom : string;
    @Column({ type: DataType.STRING })
    public  source : string;
    @Column({ type: DataType.STRING })
    public  code_barre_liv : string;
    @Column({ type: DataType.DATE })
    public  date_liv : DateDataType;
    @Column({ type: DataType.DATE })
    public  date_pick : DateDataType;
    @Column({ type: DataType.INTEGER })
    public  rt : IntegerDataType;

        
    
}