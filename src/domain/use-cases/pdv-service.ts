export const PDV_SERVICES = 'PDV_SERVICES';
        
export interface IPdvService {
    getPdvCount:()=> Promise<number>
}