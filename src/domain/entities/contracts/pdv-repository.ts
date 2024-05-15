import { PdvModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-mysql";

export const PDV_REPOSITORY = 'PDV_REPOSITORY';

export interface IPdvRepository {

    getPdvCount(): Promise<number>
    getMeilleurCommercant(): Promise<PdvModelMysql[]>
}