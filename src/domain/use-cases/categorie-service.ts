export const CATEGORIE_SERVICES = 'CATEGORIE_SERVICES';
        
export interface ICategorieService {
    getCategorieCount:()=> Promise<number>
}