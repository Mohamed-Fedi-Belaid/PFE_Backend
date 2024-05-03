import { IntegerDataType } from 'sequelize';
export type DetailCommandeEntity = {
    id : IntegerDataType;
    idcmd : IntegerDataType;
    id_prd : IntegerDataType;
    article : string;
    prix : string;
    prix_frs : string;
    qte : string;
    id_frs:  IntegerDataType;
    dt : Date;
    etat : IntegerDataType;  
    code: string;
    frais : string;
    paye : IntegerDataType;
    recette : IntegerDataType;
    id_recette : IntegerDataType;
    transport: string;
    recu: IntegerDataType;
    id_retour: IntegerDataType;
    date_liv: Date;
    nom: string;
    prenom: string;
    adresse: string;
    ville: string;
    cp: string;
    tel: string;
    imprime: IntegerDataType;
    perf:IntegerDataType;
    dispo:IntegerDataType;
    code_barre:string;
    code_barre_liv:string;



}


export type AddDetailCommandeParams = Omit<DetailCommandeEntity, 'id'>
