import { IntegerDataType } from "sequelize"

export type CommandeEntity = {
    id :IntegerDataType;
    user_id :IntegerDataType;
    facture :IntegerDataType;
    ref :string;
    dt : Date;
    user :string;
    total :string;
    frais :string;
    statut :IntegerDataType;
    adresse :string;
    ville :string;
    cp :string;
    code_barre :string;
    tel :string;
    date_add :Date;
    nom :string;
    prenom : string;
    source : string;
    code_barre_liv : string;
    date_liv : Date;
    date_pick :Date;
    rt :IntegerDataType; 

}

export type AddCommandeParams = Omit<CommandeEntity, 'id'>
