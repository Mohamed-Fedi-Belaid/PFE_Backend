export const PDV_REPOSITORY = 'PDV_REPOSITORY';

export interface IPdvRepository {

    getPdvCount(): Promise<number>
}