import { FournisseurModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/fournisseur-mysql";

export const FOURNISSEUR_SERVICES = 'FOURNISSEUR_SERVICES';
        
export interface IFournisseurService {
    
    //getAllFournisseur: () => Promise<FournisseurModelMysql[]>;
    getFournisseurCount:()=> Promise<number>

}