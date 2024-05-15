import { ArticleModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/article-mysql";
import { Model } from "sequelize";

export const ARTICLE_REPOSITORY = 'ARTICLE_REPOSITORY';

export interface IArticleRepository {
    getArticleCount(): Promise<number>
    getArticleCountDisp(): Promise<number>
    getArticleCountByCategorie(): Promise<ArticleModelMysql[]>
    getProfit(): Promise<ArticleModelMysql[]>
    getTopProduitVendue(): Promise<ArticleModelMysql[]>
    getRepartitionArticleParSousCategorie(): Promise<ArticleModelMysql[]>


}
