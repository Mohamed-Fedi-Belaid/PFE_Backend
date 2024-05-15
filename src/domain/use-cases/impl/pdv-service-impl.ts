import { Adapter, Service } from "@tsclean/core";

import { IPdvService } from "../pdv-service";
import { IPdvRepository, PDV_REPOSITORY } from "@/domain/entities/contracts/pdv-repository";
import { PdvModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-mysql";


@Service()
export class PdvServiceImpl implements IPdvService {
    constructor(
        @Adapter(PDV_REPOSITORY) private readonly PdvRepository: IPdvRepository
    ) {
    }

    
    async getPdvCount(): Promise<number> {
        return await this.PdvRepository.getPdvCount();
    }
    async getMeilleurCommercant(): Promise<PdvModelMysql[]> {
        return await this.PdvRepository.getMeilleurCommercant();
    }

  
}
