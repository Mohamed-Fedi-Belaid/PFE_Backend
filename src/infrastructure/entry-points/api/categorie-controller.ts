
import {Mapping, Get, Adapter} from "@tsclean/core";

import { FOURNISSEUR_SERVICES, IFournisseurService } from "@/domain/use-cases/fournisseur-service";
import { IPdvService, PDV_SERVICES } from "@/domain/use-cases/pdv-service";
import { CATEGORIE_SERVICES, ICategorieService } from "@/domain/use-cases/categorie-service";
import { Model } from "sequelize";

@Mapping('api/v1/categorie')
export class CategorieController {

    constructor(
        @Adapter(CATEGORIE_SERVICES) private readonly CategorieService : ICategorieService
       ) {
   }
    @Get('/count')
    async getCategorieCount(): Promise<number> {
        return await this.CategorieService.getCategorieCount();
    }
  

   
   


    


    
}
