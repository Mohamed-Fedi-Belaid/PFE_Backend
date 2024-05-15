import { IFournisseurRepository } from "@/domain/entities/contracts/fournisseur-repository";
import { FournisseurModelMysql } from "./models/fournisseur-mysql";
import { MysqlConfiguration } from "@/application/config/mysql-instance";
import sequelize from "sequelize";

export class FournisseurMysqlRepositoryAdapter implements IFournisseurRepository {


    async getFournisseurCount(): Promise<number > {
        return await FournisseurModelMysql.count();
    } 
    async getMeilleurFournisseur(): Promise<FournisseurModelMysql[] > {
        const query = `
        SELECT fournisseur_name, article_count
        FROM (
            SELECT f.nom AS fournisseur_name, COUNT(a.id) AS article_count
            FROM fournisseur f
            INNER JOIN article a ON f.id = a.id_frs
            INNER JOIN detail_cmd c ON a.id = c.id_prd
            WHERE c.etat = 6
            GROUP BY f.nom
        ) AS subquery
        ORDER BY article_count DESC
        LIMIT 5;
  `;

    const mysqlConfig = MysqlConfiguration.getInstance()
   
    return await mysqlConfig.sequelize.query(query, { type: sequelize.QueryTypes.SELECT, model: FournisseurModelMysql });

    }
  


}
