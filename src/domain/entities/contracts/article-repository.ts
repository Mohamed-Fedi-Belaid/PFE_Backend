import { Model } from "sequelize";

export const ARTICLE_REPOSITORY = 'ARTICLE_REPOSITORY';

export interface IArticleRepository {
    getArticleCount(): Promise<number>
    getArticleCountDisp(): Promise<number>
    getArticleCountByCategorie(): Promise<Model[]>
    getProfit(): Promise<Model[]>
}