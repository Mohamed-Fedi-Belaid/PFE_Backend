import { Sequelize } from "sequelize-typescript";

import { Logger } from "@tsclean/core";
import { CONFIG_MYSQL } from "@/application/config/environment";
import { DetailCommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";
import { CommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/commande-mysql";
import { ArticleModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/article-mysql";
import { CategorieModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categorie-mysql";
import { FournisseurModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/fournisseur-mysql";
import { PdvModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-mysql";

/**
 * Class that generates a connection instance for Mysql using the Singleton pattern
 */
export class MysqlConfiguration {
  private logger: Logger;
  private static instance: MysqlConfiguration;

  public sequelize: Sequelize;

  private constructor() {
    this.logger = new Logger(MysqlConfiguration.name);
    this.sequelize = new Sequelize(
      CONFIG_MYSQL.database,
      CONFIG_MYSQL.user,
      CONFIG_MYSQL.password,
      {
        host: CONFIG_MYSQL.host,
        dialect: "mysql",
        // This array contains all the system models that are used for Mysql.
        models: [
          DetailCommandeModelMysql,
          CommandeModelMysql,
          ArticleModelMysql,
          CategorieModelMysql,
          FournisseurModelMysql,
          PdvModelMysql,
          

        ]
      }
    );
  }

  public static getInstance(): MysqlConfiguration {
    if (!MysqlConfiguration.instance) {
      MysqlConfiguration.instance = new MysqlConfiguration();
    }
    return MysqlConfiguration.instance;
  }

  public async managerConnectionMysql(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      this.logger.log(
        `Connection successfully to database of Mysql: ${CONFIG_MYSQL.database}`
      );
    } catch (error) {
      this.logger.error("Failed to connect to Mysql", error);
    }
  }
}
