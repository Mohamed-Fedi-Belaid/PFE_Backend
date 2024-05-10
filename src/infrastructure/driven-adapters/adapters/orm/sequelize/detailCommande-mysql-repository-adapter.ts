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

        SELECT SUM(detail_cmd.prix),categorie.nom from detail_cmd 
        inner join article ON article.id = detail_cmd.id_prd
        join categorie on article.idcat= categorie.id where detail_cmd.etat group by categorie.nom ;
        `;
    
        return await DetailCommandeModelMysql.sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
   }
}