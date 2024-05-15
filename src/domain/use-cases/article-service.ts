import { ArticleModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/article-mysql";
import { Model } from "sequelize";

export const ARTICLE_SERVICES = 'ARTICLE_SERVICES';
        
export interface IArticleService {
    getArticleCount:()=> Promise<number>
    getArticleCountDisp:() => Promise<number>
    getArticleCountByCategorie:() => Promise<ArticleModelMysql[]>
    getProfit:() => Promise<Model[]>
    getTopProduitVendue:() => Promise<ArticleModelMysql[]>
    getRepartitionArticleParSousCategorie:() => Promise<ArticleModelMysql[]>
}