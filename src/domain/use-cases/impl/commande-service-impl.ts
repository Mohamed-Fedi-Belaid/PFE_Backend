import { Adapter, Service } from "@tsclean/core";
import { ICommandeService } from "../commande-service";
import { COMMANDE_REPOSITORY, ICommandeRepository } from "@/domain/entities/contracts/commande-repository";
import { CommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/commande-mysql";


@Service()
export class CommandeServiceImpl implements ICommandeService {
    constructor(
        @Adapter(COMMANDE_REPOSITORY) private readonly CommandeRepository: ICommandeRepository
    ) {
    }

    
    async getCommandeSum(): Promise<number> {
        return await this.CommandeRepository.getCommandeSum();
    }
    async getCommandeCount(): Promise<number> {
        return await this.CommandeRepository.getCommandeCount();
    }
    async getCommandeCountAll(): Promise<number> {
        return await this.CommandeRepository.getCommandeCountAll();
    }
    async getCommandeSumDividedByCountAll(): Promise<number> {
        return await this.CommandeRepository.getCommandeSumDividedByCountAll();
    }
    async getCommandeByMonth(): Promise<number> {
        return await this.CommandeRepository.getCommandeByMonth();
    }
    async getCommandeCountByDayForLastMonth(): Promise<CommandeModelMysql[]> {
        return await this.CommandeRepository.getCommandeCountByDayForLastMonth();
    }
    async getSumVenteParVille(): Promise<CommandeModelMysql[]> {
        return await this.CommandeRepository.getSumVenteParVille();
    }
}
