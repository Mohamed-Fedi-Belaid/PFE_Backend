import { CommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/commande-mysql";

export const COMMANDE_SERVICES = 'COMMANDE_SERVICES';
        
export interface ICommandeService {
    getCommandeSum:()=> Promise<number>
    getCommandeCount:()=> Promise<number>
    getCommandeCountAll:()=> Promise<number>
    getCommandeSumDividedByCountAll:()=> Promise<number>
    getCommandeByMonth:()=> Promise<number>
    getCommandeCountByDayForLastMonth:()=> Promise<CommandeModelMysql[]>
    getSumVenteParVille:()=> Promise<CommandeModelMysql[]>
}