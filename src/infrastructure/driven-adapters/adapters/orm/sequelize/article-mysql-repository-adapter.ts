import { Op, Model } from 'sequelize';
import { ArticleModelMysql } from './models/article-mysql';
import { CategorieModelMysql } from './models/categorie-mysql';
import { Sequelize } from "sequelize";
import sequelize from 'sequelize';
export class ArticleMysqlRepositoryAdapter {
  async getArticleCount(): Promise<number> {
    return await ArticleModelMysql.count();
  }

  async getArticleCountDisp(): Promise<number> {
    return await ArticleModelMysql.count({
      where: {
        qte: {
          [Op.gt]: 0,
        },
      },
    });
  }

  async getArticleCountByCategorie(): Promise<Model[]> {
    try {
      return await ArticleModelMysql.findAll({
        attributes: [
          'id',
          [Sequelize.fn('COUNT', Sequelize.col('id')), 'count'],
        ],
        include: {
          model: CategorieModelMysql,
          as: 'categorie',
          attributes: [],
          required: true,
        },
        group: ['Article.id'],
        where: {
          idcat: {
            [Op.eq]: Sequelize.col('categorie.id'),
          },
        },
      });
    } catch (error) {
      console.error('Error in getArticleByCategorie:', error);
      throw error;
    }
  }
  async getProfit(): Promise<ArticleModelMysql[]> {
    return await ArticleModelMysql.findAll({
      attributes: [
      
        [sequelize.fn('SUM', sequelize.literal('CAST(prix_vente AS DECIMAL(10,2)) - CAST(prix_achat AS DECIMAL(10,2))')), 'profit']
      ],
      raw: true // This is necessary to include the calculated fields in the result
    })
  }
  


}

