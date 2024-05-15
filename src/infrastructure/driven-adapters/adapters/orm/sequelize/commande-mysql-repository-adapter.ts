import { Op } from "sequelize";
import { CommandeModelMysql } from "./models/commande-mysql";
import { ICommandeRepository } from "@/domain/entities/contracts/commande-repository";
import sequelize from "sequelize";
import { MysqlConfiguration } from "@/application/config/mysql-instance";

export class CommandeMysqlRepositoryAdapter implements ICommandeRepository {
  async getCommandeSum(): Promise<number> {
    return await CommandeModelMysql.findAll({
      attributes: [
        "total",
        [sequelize.fn("SUM", sequelize.col("total")), "total"],
      ],

      raw: true, // This will return only the total sum
    })
      .then((result: any) => {
        return result[0].total;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
  async getCommandeCount(): Promise<number> {
    return await CommandeModelMysql.count({
      where: {
        statut: {
          [Op.eq]: 6,
        },
      },
    })
      .then((result: any) => {
        return result;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
  async getCommandeCountAll(): Promise<number> {
    return await CommandeModelMysql.count()
      .then((result: any) => {
        return result;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
  async getCommandeSumDividedByCountAll(): Promise<number> {
    try {
      const sum = await this.getCommandeSum();
      const countAll = await this.getCommandeCountAll();

      // Vérification pour éviter la division par zéro
      if (countAll === 0) {
        throw new Error("Division by zero.");
      }

      return sum / countAll;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async getCommandeByMonth(): Promise<number> {
    return await CommandeModelMysql.count({
      where: {
        date_add: {
          [Op.gte]: new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1, 
          ),
        },
      },
    })
      .then((result: any) => {
        return result;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  async  getCommandeCountByDayForLastMonth(): Promise<CommandeModelMysql[]> {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 4);

    
    return CommandeModelMysql.findAll({
      attributes: [
        [sequelize.fn('DATE', sequelize.col('date_add')), 'day'],
        [sequelize.fn('COUNT', sequelize.col('id')), 'commandeCount'],
      ],
      where: {
        date_add: {
          [Op.gte]: oneMonthAgo,
          [Op.lte]: new Date(), // Current date
        },
      },
      group: ['day'],
      order: [['day', 'ASC']],
    })

  }


  async  getSumVenteParVille(): Promise<CommandeModelMysql[]> {
    const query = `
   
    SELECT SUM(total), ville from commande where statut=6 group By ville; 
 

  `;
   const mysqlConfig = MysqlConfiguration.getInstance()
   
   return await mysqlConfig.sequelize.query(query, { type: sequelize.QueryTypes.SELECT, model: CommandeModelMysql });
  }

  




}

