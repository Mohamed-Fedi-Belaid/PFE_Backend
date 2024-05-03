import { Adapter, Service } from "@tsclean/core";

import { IPdvService } from "../pdv-service";
import { IPdvRepository, PDV_REPOSITORY } from "@/domain/entities/contracts/pdv-repository";


@Service()
export class PdvServiceImpl implements IPdvService {
    constructor(
        @Adapter(PDV_REPOSITORY) private readonly PdvRepository: IPdvRepository
    ) {
    }

    
    async getPdvCount(): Promise<number> {
        return await this.PdvRepository.getPdvCount();
    }

  
}
