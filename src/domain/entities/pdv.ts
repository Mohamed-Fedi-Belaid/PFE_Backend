import { IntegerDataType } from "sequelize"

export type PdvEntity = {
    id : IntegerDataType;
    boutique : string;
    nom : string;
    prenom : string;
    tel : string;
    email : string;
    pwd : string;
    code_comptable : string;
    rne : string;
    cin : string;
    rne_file : string;
    cin_file : string;
    date_add : Date;
    status : IntegerDataType;
    adresse : string;
    ville : string;
    secteur : string;
    deleted : IntegerDataType;
    supp : string;
    source : string;
    cp : string;
    longitude : string;
    latitude : string;
    reference_weryou : string;

}

export type AddPdvParams = Omit<PdvEntity, 'id'>
