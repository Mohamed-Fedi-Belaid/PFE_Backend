import {PdvEntity} from "@/domain/entities/pdv";
import {PdvModelMysql}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-mysql";

export class PdvMysqlRepositoryAdapter {
    async getPdvCount(): Promise<number > {
        return await PdvModelMysql.count();
    }
}
