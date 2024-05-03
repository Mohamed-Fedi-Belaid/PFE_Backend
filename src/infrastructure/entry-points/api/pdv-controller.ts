
import {Mapping, Get, Adapter} from "@tsclean/core";

import { FOURNISSEUR_SERVICES, IFournisseurService } from "@/domain/use-cases/fournisseur-service";
import { IPdvService, PDV_SERVICES } from "@/domain/use-cases/pdv-service";

@Mapping('api/v1/pdv')
export class PdvController {

    constructor(
        @Adapter(PDV_SERVICES) private readonly PdvService: IPdvService
       ) {
   }
    @Get('/count')
    async getPdvCount(): Promise<number> {
        return await this.PdvService.getPdvCount();
    }

   
   


    


    
}
