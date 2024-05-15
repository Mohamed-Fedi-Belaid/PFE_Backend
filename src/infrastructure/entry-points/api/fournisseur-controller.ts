
import {Mapping, Get, Adapter} from "@tsclean/core";

import { FOURNISSEUR_SERVICES, IFournisseurService } from "@/domain/use-cases/fournisseur-service";
import { FournisseurModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/fournisseur-mysql";

@Mapping('api/v1/fournisseur')
export class FournisseurController {

    constructor(
        @Adapter(FOURNISSEUR_SERVICES) private readonly FournisseurService: IFournisseurService
   ) {
   }
    @Get('/count')
    async getAllFournisseur(): Promise<number> {
        return await this.FournisseurService.getFournisseurCount();
    }
    @Get('/MeilleurFournisseur')
    async getMeilleurFournisseur(): Promise<FournisseurModelMysql[]> {
        return await this.FournisseurService.getMeilleurFournisseur();
    }
   
   


    


    
}
