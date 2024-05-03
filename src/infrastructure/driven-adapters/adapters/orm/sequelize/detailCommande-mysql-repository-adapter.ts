import { IDetailCommandeRepository } from "@/domain/entities/contracts/detailCommande-repository";
import {DetailCommandeEntity} from "@/domain/entities/detailCommande";
import {DetailCommandeModelMysql}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";
import sequelize from "sequelize";
import { Op } from "sequelize";

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
}