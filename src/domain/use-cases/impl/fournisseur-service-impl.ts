import { Adapter, Service } from "@tsclean/core";
import { IFournisseurService } from "../fournisseur-service";
import { FOURNISSEUR_REPOSITORY, IFournisseurRepository } from "@/domain/entities/contracts/fournisseur-repository";
import { FournisseurModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/fournisseur-mysql";


@Service()
export class FournisseurServiceImpl implements IFournisseurService {
    constructor(
        @Adapter(FOURNISSEUR_REPOSITORY) private readonly FournisseurRepository: IFournisseurRepository
    ) {
    }

    
    // async getAllFournisseur(): Promise<FournisseurModelMysql[]> {
    //     return await this.FournisseurRepository.getAllFournisseur();
    // } 
    async getFournisseurCount(): Promise<number> {
        return await this.FournisseurRepository.getFournisseurCount();
    }

  
}
