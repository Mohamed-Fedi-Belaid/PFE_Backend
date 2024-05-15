import { Op, Model } from 'sequelize';
import { ArticleModelMysql } from './models/article-mysql';
import { CategorieModelMysql } from './models/categorie-mysql';
import { Sequelize } from "sequelize";
import { ArticleEntity } from '@/domain/entities/article';
import sequelize from 'sequelize';
import { MysqlConfiguration } from '@/application/config/mysql-instance';

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






  async getArticleCountByCategorie(): Promise<ArticleModelMysql[]> {
    const query = `

    SELECT c.nom AS category_name, SUM(dc.prix) AS total_price, COUNT(a.id) AS article_count
    FROM categorie c
    INNER JOIN article a ON c.id = a.idcat
    INNER JOIN detail_cmd dc ON a.id = dc.id_prd
    WHERE dc.etat = 6
    GROUP BY c.nom;
  `;
   const mysqlConfig = MysqlConfiguration.getInstance()
   
   return await mysqlConfig.sequelize.query(query, { type: sequelize.QueryTypes.SELECT, model: ArticleModelMysql });
  }





  async getProfit(): Promise<ArticleModelMysql[]> {
    return await ArticleModelMysql.findAll({
      attributes: [
      
        [sequelize.fn('SUM', sequelize.literal('CAST(prix_vente AS DECIMAL(10,2)) - CAST(prix_achat AS DECIMAL(10,2))')), 'profit']
      ],
      raw: true // This is necessary to include the calculated fields in the result
    })
  }
  

  async getTopProduitVendue(): Promise<ArticleModelMysql[]> {
    const query = `
    SELECT count(*) as num , a.nom from article a INNER JOIN detail_cmd c  
    ON a.id=c.id_prd where c.etat=6 group by a.nom order by  num desc; 

  `;
   const mysqlConfig = MysqlConfiguration.getInstance()
   
   return await mysqlConfig.sequelize.query(query, { type: sequelize.QueryTypes.SELECT, model: ArticleModelMysql });
  }

  async getRepartitionArticleParSousCategorie(): Promise<ArticleModelMysql[]> {
    const query = `
        
    SELECT SUM(c.prix) as sum,s.nom FROM detail_cmd  c inner jOIN article a on a.id=c.id_prd INNER JOIN sous_cat s ON s.id = a.idscat
    group by  s.nom


  `;
   const mysqlConfig = MysqlConfiguration.getInstance()
   
   return await mysqlConfig.sequelize.query(query, { type: sequelize.QueryTypes.SELECT, model: ArticleModelMysql });
  }
  
  


}

