import { Table, Column, Model, Sequelize, PrimaryKey, Default, DataType, HasMany } from 'sequelize-typescript'
import { CategorieEntity } from "@/domain/entities/categorie";
import { IntegerDataType } from 'sequelize';
import { ArticleModelMysql } from './article-mysql';
@Table({ tableName: 'categorie' })
export class CategorieModelMysql extends Model<CategorieEntity> {
    @PrimaryKey
    @Column({ type: DataType.INTEGER})
    public id: IntegerDataType;
    @Column({ type: DataType.STRING})
    public nom: string;
    @Column({ type: DataType.STRING})
    public commission: string;
    @Column({ type: DataType.INTEGER})
    public affiche: IntegerDataType;
    @Column({ type: DataType.INTEGER})
    public num: IntegerDataType;
    @Column({ type: DataType.STRING})
    public img: string;
    @Column({ type: DataType.STRING})
    public tags: String;

    @HasMany(() => ArticleModelMysql)
    public articles: ArticleModelMysql[];




}