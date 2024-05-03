import { FournisseurModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/fournisseur-mysql";

export const FOURNISSEUR_REPOSITORY = 'FOURNISSEUR_REPOSITORY';

export interface IFournisseurRepository {
   // getAllFournisseur(): Promise<FournisseurModelMysql[]>;
    getFournisseurCount(): Promise<number>
    
}