import { Adapter, Service } from "@tsclean/core";

import { CATEGORIE_REPOSITORY } from "@/domain/entities/contracts/categorie-repository";
import { ICategorieService } from "../categorie-service";
import { ICategorieRepository } from "@/domain/entities/contracts/categorie-repository";
import { Model } from "sequelize";


@Service()
export class CategorieServiceImpl implements ICategorieService {
    constructor(
        @Adapter(CATEGORIE_REPOSITORY) private readonly CategorieRepository: ICategorieRepository
    ) {
    }

    
    async getCategorieCount(): Promise<number> {
        return await this.CategorieRepository.getCategorieCount();
    }
    

  
}
