import { Model, Op } from 'sequelize';
import sequelize from 'sequelize';
import { ArticleModelMysql } from "./models/article-mysql";
import { CategorieModelMysql } from './models/categorie-mysql';

export class ArticleMysqlRepositoryAdapter {
    async getArticleCount(): Promise<number > {
        return await ArticleModelMysql.count();
    }
    async getArticleCountDisp(): Promise<number > {
        return await ArticleModelMysql.count(
            {
                where: {
                    qte: {
                        [Op.gt]: 0,
                    },
                },
            }
        );
    }


async getArticleCountByCategorie(): Promise<Model[]> {
        try {
            const articles = await ArticleModelMysql.findAll({
                include: [{
                    model: CategorieModelMysql,
                    as: 'categorie',
                    required: true,
                    attributes: [], 
                    where: {} 
                }],
                attributes: [
                    'id',
                    [sequelize.fn('count', sequelize.col('id')), 'count']
                ],
                group: ['Article.id'],
                where: {
                    idcat: {
                        [sequelize.Op.eq]: sequelize.col('categorie.id')
                    }
                }
            });
            if (!articles) {
                throw new Error('No articles found');
            }
            return articles;
        } catch (error) {
            console.error('Error in getArticleByCategorie:', error);
            throw error;
        }
    }
}
