export const CATEGORIE_REPOSITORY = 'CATEGORIE_REPOSITORY';

export interface ICategorieRepository {
    getCategorieCount(): Promise<number>
}
