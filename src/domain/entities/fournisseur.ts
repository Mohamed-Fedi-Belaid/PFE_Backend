import { IntegerDataType } from "sequelize"

export type FournisseurEntity = {
    id :IntegerDataType;
    nom  :string;
    boutique :string;
    login :string;
    pwd :string;
    code_comptable :string;
    tva : string;
    rib : string;
    banque : string;
    contact : string;
    etat : IntegerDataType;
    tel : string;
    adresse : string;
    ville : string;
    date_add : Date;
    email : string;
    juridique : string;
    pour : string;
    commission : string;
    cin :  string;
    cin_photo : string;
    tva_img :string;
    demande : IntegerDataType;
    rib_photo : string;
    mode : string;
    cp : string;
    source : string; 




}

export type AddFournisseurParams = Omit<FournisseurEntity, 'id'>
