import {Adapter, Service} from "@tsclean/core";
import {IDetailCommandeService} from "@/domain/use-cases/detailCommande-service";
import { DETAILCOMMANDE_REPOSITORY, IDetailCommandeRepository } from "@/domain/entities/contracts/detailCommande-repository";
import { DetailCommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";

@Service()
export class DetailCommandeServiceImpl implements IDetailCommandeService {
    constructor( @Adapter(DETAILCOMMANDE_REPOSITORY) private readonly DetailCommandeRepository: IDetailCommandeRepository) {
    }
    async getVenteParSaison(): Promise<DetailCommandeModelMysql[] > {
        return await this.DetailCommandeRepository.getVenteParSaison();
    }
    async getEvolutionVentesParCategorie(): Promise<DetailCommandeModelMysql[]> {
        return await this.DetailCommandeRepository.getEvolutionVentesParCategorie();
    }
}