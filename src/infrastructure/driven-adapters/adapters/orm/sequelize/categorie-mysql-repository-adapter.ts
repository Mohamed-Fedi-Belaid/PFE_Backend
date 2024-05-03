
import { CategorieModelMysql } from "./models/categorie-mysql";

export class CategorieMysqlRepositoryAdapter {
    async getCategorieCount(): Promise<number > {
        return await CategorieModelMysql.count();
    }
}
