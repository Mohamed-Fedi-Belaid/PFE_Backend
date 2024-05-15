
import {Mapping, Get, Adapter} from "@tsclean/core";
import { COMMANDE_SERVICES, ICommandeService } from "@/domain/use-cases/commande-service";
import { CommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/commande-mysql";

@Mapping('api/v1/commande')
export class CommandeControlle   {

    constructor(
        @Adapter(COMMANDE_SERVICES) private readonly CommandeService: ICommandeService
       ) {
   }
    @Get('/sum')
    async getCommandeSum(): Promise<number> {
        return await this.CommandeService.getCommandeSum();
    }
    @Get('/count')
    async getCommandeCount(): Promise<number> {
        return await this.CommandeService.getCommandeCount();
    }
    @Get('/countAll')
    async getCommandeCountAll(): Promise<number> {
        return await this.CommandeService.getCommandeCountAll();
    }
    @Get('/sumDividedByCountAll')
    async getCommandeSumDividedByCountAll(): Promise<number> {
        return await this.CommandeService.getCommandeSumDividedByCountAll();
    }
    @Get('/getCommandeByMonth')
    async getCommandeByMonth(): Promise<number> {
        return await this.CommandeService.getCommandeByMonth();
    }
    @Get('/getCommandeCountByDayForLastMonth')
    async getCommandeCountByDayForLastMonth(): Promise<CommandeModelMysql[]> {
        return await this.CommandeService.getCommandeCountByDayForLastMonth();
    }

    @Get('/getSumVenteParVille')
    async getSumVenteParVille(): Promise<CommandeModelMysql[]> {
        return await this.CommandeService.getSumVenteParVille();
    }
   
   


    


    
}
