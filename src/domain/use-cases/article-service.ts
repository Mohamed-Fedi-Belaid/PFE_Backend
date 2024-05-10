import { Model } from "sequelize";

export const ARTICLE_SERVICES = 'ARTICLE_SERVICES';
        
export interface IArticleService {
    getArticleCount:()=> Promise<number>
    getArticleCountDisp:() => Promise<number>
    getArticleCountByCategorie:() => Promise<Model[]>
    getProfit:() => Promise<Model[]>
}