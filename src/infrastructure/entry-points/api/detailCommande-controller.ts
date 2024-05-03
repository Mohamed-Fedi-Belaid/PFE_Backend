import { DETAILCOMMANDE_SERVICES, IDetailCommandeService } from "@/domain/use-cases/detailCommande-service";
import { DetailCommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";
import {Mapping, Get, Adapter} from "@tsclean/core";

@Mapping('api/v1/detailCommande')
export class DetailCommandeController {

    constructor(  @Adapter(DETAILCOMMANDE_SERVICES) private readonly DetailCommandeService: IDetailCommandeService
) {
    }
   
    @Get('/venteParSaison')
    async getVenteParSaison(): Promise<DetailCommandeModelMysql[] > {
        return await this.DetailCommandeService.getVenteParSaison();
    }
}
