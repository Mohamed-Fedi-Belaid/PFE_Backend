
import { Model, Op } from "sequelize";
import { CategorieModelMysql } from "./models/categorie-mysql";
import { Sequelize } from "sequelize";
import { ArticleModelMysql } from "./models/article-mysql";
import sequelize from "sequelize";

export class CategorieMysqlRepositoryAdapter {
    async getCategorieCount(): Promise<number > {
        return await CategorieModelMysql.count();
    }
    

    
}
