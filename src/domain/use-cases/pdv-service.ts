import { PdvModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-mysql";

export const PDV_SERVICES = 'PDV_SERVICES';
        
export interface IPdvService {
    getPdvCount:()=> Promise<number>
    getMeilleurCommercant:()=> Promise<PdvModelMysql[]>
}