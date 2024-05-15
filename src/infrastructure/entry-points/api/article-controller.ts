
import {Mapping, Get, Adapter} from "@tsclean/core";

import { ARTICLE_SERVICES, IArticleService } from "@/domain/use-cases/article-service";
import { Model } from "sequelize";

@Mapping('api/v1/article')
export class ArticleController {

    constructor(
        @Adapter(ARTICLE_SERVICES) private readonly ArticleService: IArticleService
       ) {
   }
    @Get('/count')
    async getArticleCount(): Promise<number> {
        return await this.ArticleService.getArticleCount();
    }
    @Get('/count/disponible')
    async getArticleCountDisp(): Promise<number> {
        return await this.ArticleService.getArticleCountDisp();
    }
    @Get('/getArticleCountByCategorie')
    async getArticleCountByCategorie(): Promise<Model[]> {
        return await this.ArticleService.getArticleCountByCategorie();
    }
    @Get('/getProfit')
    async getProfit(): Promise<Model[]> {
        return await this.ArticleService.getProfit();
    }    

    @Get('/getTopProduitVendue')
    async getTopProduitVendue(): Promise<Model[]> {
        return await this.ArticleService.getTopProduitVendue();
    }

    @Get('/getRepartitionArticleParSousCategorie')
    async getRepartitionArticleParSousCategorie(): Promise<Model[]> {
        return await this.ArticleService.getRepartitionArticleParSousCategorie();
    }
    






    
    
}
