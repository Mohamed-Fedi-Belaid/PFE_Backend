import { IFournisseurRepository } from "@/domain/entities/contracts/fournisseur-repository";
import { FournisseurModelMysql } from "./models/fournisseur-mysql";

export class FournisseurMysqlRepositoryAdapter implements IFournisseurRepository {


    async getFournisseurCount(): Promise<number > {
        return await FournisseurModelMysql.count();
    }
  


}
