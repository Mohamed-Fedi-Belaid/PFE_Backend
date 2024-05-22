import { DetailCommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";

export const DETAILCOMMANDE_SERVICES = 'DETAILCOMMANDE_SERVICES';
        
export interface IDetailCommandeService {
    getVenteParSaison:()=> Promise<DetailCommandeModelMysql[] >
    getEvolutionVentesParCategorie:()=> Promise<DetailCommandeModelMysql[] >
    getNbArticleVenduParSaison:()=> Promise<DetailCommandeModelMysql[] >
    getSommeVenteParMois:()=> Promise<DetailCommandeModelMysql[] >
    getSommeVenteParVille:()=> Promise<DetailCommandeModelMysql[] >
}