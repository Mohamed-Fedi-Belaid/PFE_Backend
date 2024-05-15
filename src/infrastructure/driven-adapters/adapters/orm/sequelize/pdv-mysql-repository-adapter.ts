import { MysqlConfiguration } from "@/application/config/mysql-instance";
import {PdvEntity} from "@/domain/entities/pdv";
import {PdvModelMysql}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-mysql";
import sequelize from "sequelize";

export class PdvMysqlRepositoryAdapter {
    async getPdvCount(): Promise<number > {
        return await PdvModelMysql.count();
    }
    async getMeilleurCommercant(): Promise<PdvModelMysql[] > {
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
   
    return await mysqlConfig.sequelize.query(query, { type: sequelize.QueryTypes.SELECT, model: PdvModelMysql });

    }

}

