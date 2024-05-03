import { Table, Column, Model, Sequelize, PrimaryKey, Default, DataType, ForeignKey } from 'sequelize-typescript'
import { ArticleEntity } from "@/domain/entities/article";
import { DateDataType, IntegerDataType } from 'sequelize';

@Table({ tableName: 'article' })
export class ArticleModelMysql extends Model<ArticleEntity> {
    @PrimaryKey
    @Default(DataType)
    @Column({ type: DataType.INTEGER })
    public id: IntegerDataType;
    @ForeignKey(()=>ArticleModelMysql)
    @Column({ type: DataType.INTEGER })
    public id_frs  : IntegerDataType;
    @ForeignKey(()=>ArticleModelMysql)
    @Column({ type: DataType.INTEGER })
    public idcat  : {IntegerDataType,refrences:'categorie',refrenceKey:'id'};
     @ForeignKey(()=>ArticleModelMysql)
    @Column({ type: DataType.INTEGER })
    public idscat  : IntegerDataType;   
    @ForeignKey(()=>ArticleModelMysql)
    @Column({ type: DataType.INTEGER })
    public idsscat  : IntegerDataType;
    @Column({ type: DataType.STRING })
    public nom : string;
    @Column({ type: DataType.STRING })
    public ref: string;
    @Column({ type: DataType.STRING })
    public qte: string;
    @Column({ type: DataType.STRING })
    public prix_achat: string;
    @Column({ type: DataType.STRING })
    public prix_vente: string;
    @Column({ type: DataType.STRING })
    public prix_vente_affiche: string;
    @Column({ type: DataType.STRING })
    public prix_old: string;
    @Column({ type: DataType.STRING })
    public description: string;
    @Column({ type: DataType.STRING })
    public img1: string;
    @Column({ type: DataType.STRING })
    public img2: string;
    @Column({ type: DataType.STRING })
    public img3: string;
    @Column({ type: DataType.STRING })
    public img4: string;
    @Column({ type: DataType.STRING })
    public img5: string;
    @Column({ type: DataType.INTEGER })
    public etat: IntegerDataType;
    @Column({ type: DataType.DATE })
    public date_add: Date;
    @Column({ type: DataType.DATE })
    public date_upd: DateDataType;
    @Column({ type: DataType.STRING })
    public presentation: string;
    @Column({ type: DataType.INTEGER })
    public flash: IntegerDataType;
    @Column({ type: DataType.INTEGER })
    public marque: IntegerDataType;
    @Column({ type: DataType.STRING })
    public modele: string;
    @Column({ type: DataType.STRING })
    public couleur: string;
    @Column({ type: DataType.STRING })
    public delivery: string;
    @Column({ type: DataType.STRING })
    public dimension: string;
    @Column({ type: DataType.STRING })
    public poids: string;
    @Column({ type: DataType.STRING })
    public  pays : string;
    @Column({ type: DataType.STRING })
    public garantie: string;
    @Column({ type: DataType.STRING })
    public prix_promo: string;
    @Column({ type: DataType.DATE })
    public dt_deb: Date;
    @Column({ type: DataType.DATE })
    public dt_fin: Date;
    @Column({ type: DataType.STRING })
    public tags: string;
    @Column({ type: DataType.INTEGER })
    public vu: IntegerDataType;
    @Column({ type: DataType.STRING })
    public youtube: string;
    @Column({ type: DataType.STRING })
    public video: string;
    @Column({ type: DataType.STRING })
    public code: string;
    @Column({ type: DataType.STRING })
    public lien: string;
    @Column({ type: DataType.STRING })
    public majoration: string;
    @Column({ type: DataType.STRING })
    public tva: string;
    @Column({ type: DataType.STRING })
    public commission: string;
    @Column({ type: DataType.STRING })
    public taille: string;
    @Column({ type: DataType.INTEGER })
    public qte_min: IntegerDataType;
    @Column({ type: DataType.STRING })
    public vente: string;
    @Column({ type: DataType.STRING })
    public  vente_exo : string;
    @Column({ type: DataType.STRING })
    public vente_expo: string;
    @Column({ type: DataType.STRING })
    public achat_loc: string;
    @Column({ type: DataType.STRING })
    public achat_imp: string;
    @Column({ type: DataType.INTEGER })
    public num: IntegerDataType;
    
}