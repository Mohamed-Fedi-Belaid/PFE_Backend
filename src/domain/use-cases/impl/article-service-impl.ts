import { Adapter, Service } from "@tsclean/core";

import { IArticleService } from "../article-service";
import { ARTICLE_REPOSITORY, IArticleRepository } from "@/domain/entities/contracts/article-repository";
import { Model } from "sequelize";
import { ArticleModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/article-mysql";


@Service()
export class ArticleServiceImpl implements IArticleService {
    constructor(
        @Adapter(ARTICLE_REPOSITORY) private readonly ArticleRepository: IArticleRepository
    ) {
    }

    async getArticleCount(): Promise<number> {
        return await this.ArticleRepository.getArticleCount();
    }
    async getArticleCountDisp(): Promise<number> {
        return await this.ArticleRepository.getArticleCountDisp();
    }
    async getArticleCountByCategorie(): Promise<ArticleModelMysql[]> {
        return await this.ArticleRepository.getArticleCountByCategorie();
    }
    async getProfit(): Promise<Model[]> {
        return await this.ArticleRepository.getProfit();
    }

    async getTopProduitVendue(): Promise<ArticleModelMysql[]> {
        return await this.ArticleRepository.getTopProduitVendue();
    }

    
    async getRepartitionArticleParSousCategorie(): Promise<ArticleModelMysql[]> {
        return await this.ArticleRepository.getRepartitionArticleParSousCategorie();
    }
}
