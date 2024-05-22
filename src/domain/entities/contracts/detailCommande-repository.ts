import { DetailCommandeModelMysql } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/detailCommande-mysql";

export const DETAILCOMMANDE_REPOSITORY = 'DETAILCOMMANDE_REPOSITORY';

export interface IDetailCommandeRepository {
    getVenteParSaison():Promise<DetailCommandeModelMysql[] >
    getEvolutionVentesParCategorie(): Promise<DetailCommandeModelMysql[]>
    getNbArticleVenduParSaison(): Promise<DetailCommandeModelMysql[]>
    getSommeVenteParMois(): Promise<DetailCommandeModelMysql[]>
    getSommeVenteParVille(): Promise<DetailCommandeModelMysql[]>

}