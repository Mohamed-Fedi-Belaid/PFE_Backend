import { IDetailCommandeRepository } from "@/domain/entities/contracts/detailCommande-repository";
import {DetailCommandeEntity} from "@/domain/entities/detailCommande";
import {DetailCommandeModelMysql}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";
import sequelize, { Sequelize } from "sequelize";
import { Op } from "sequelize";
import { ArticleModelMysql } from "./models/article-mysql";
import { CategorieModelMysql } from "./models/categorie-mysql";

export class DetailCommandeMysqlRepositoryAdapter implements IDetailCommandeRepository {
    async getVenteParSaison(): Promise<DetailCommandeModelMysql[] > {
        return await DetailCommandeModelMysql.findAll({
            attributes: [
                'id',
                'article',
                'etat',
                [sequelize.fn('COUNT', sequelize.col('id_prd')), 'nb'], // Changed COUNT
            ],
            where: {
                dt:{[Op.gte]: new Date(new Date().getFullYear(), new Date().getMonth()-36),},
                etat:{[Op.eq]:6},
            },
            group:['article'],
            order: [
                sequelize.literal('nb DESC'), // Changed the order
            ]
        }).then((result: any) => {
            return result;
        }).catch((err: Error) => {
            console.error(err);
        });
    }

    async  getEvolutionVentesParCategorie():Promise<DetailCommandeModelMysql[] > {
    
        const query = `

        SELECT SUM(detail_cmd.prix) AS SommeVente ,categorie.nom from detail_cmd 
        inner join article ON article.id = detail_cmd.id_prd
        join categorie on article.idcat= categorie.id where detail_cmd.etat group by categorie.nom ;
        `;
    
        return await DetailCommandeModelMysql.sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    }
    async  getNbArticleVenduParSaison():Promise<DetailCommandeModelMysql[] > {
    
        const query = `

        SELECT 
        s.season,
        COUNT(dp.article) AS number_of_products,
        GROUP_CONCAT(DISTINCT dp.article SEPARATOR ', ') AS articles
        FROM ( -- Create a distinct list of seasons
            SELECT 'Spring' AS season
            UNION ALL
            SELECT 'Summer'
            UNION ALL
            SELECT 'Autumn'
            UNION ALL
            SELECT 'Winter'
        ) AS s
        LEFT JOIN (
            -- Assign a season to each product
            SELECT 
                article,
                CASE
                    WHEN MONTH(dt) BETWEEN 3 AND 5 THEN 'Spring'
                    WHEN MONTH(dt) BETWEEN 6 AND 8 THEN 'Summer'
                    WHEN MONTH(dt) BETWEEN 9 AND 11 THEN 'Autumn'
                    ELSE 'Winter'
                END AS season
            FROM detail_cmd
        ) AS dp ON s.season = dp.season
        GROUP BY s.season
        ORDER BY number_of_products DESC;
        `;
    
        return await DetailCommandeModelMysql.sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    }

    async  getSommeVenteParMois():Promise<DetailCommandeModelMysql[] > {
    
        const query = `
                SELECT 
                DAY(c.dt) AS jour,
                MONTHNAME(c.dt) AS mois,
                YEAR(c.dt) AS annee,
                SUM(c.prix) AS somme
                FROM 
                detail_cmd c
                INNER JOIN 
                article a ON a.id = c.id_prd
                GROUP BY 
                jour, mois, annee;
        `;
    
        return await DetailCommandeModelMysql.sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    }

    async  getSommeVenteParVille():Promise<DetailCommandeModelMysql[] > {
    
        const query = `
                
         select  ville, SUM( prix)  from detail_cmd  where etat = 6 GROUP BY ville;
        `;
    
        return await DetailCommandeModelMysql.sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    }
}