import { IntegerDataType } from "sequelize";

export type ArticleEntity = {
    id : IntegerDataType;
    id_frs : IntegerDataType;
    idcat : IntegerDataType;
    idsscat: IntegerDataType;
    nom : string;
    ref: string;
    qte: string;
    prix_achat: string;
    prix_vente: string;
    prix_vente_affiche: string;
    prix_old : string;
    description: Text; 
    img1 :string;
    img2 :string;
    img3 :string; 
    img4 :string;
    img5 :string;
    etat: IntegerDataType;
    date_add: Date;
    date_upd: Date;
    presentation: Text;
    flash : IntegerDataType;
    marque : IntegerDataType;
    modele :string;
    couleur : string;
    delivery : string;
    dimension : string;
    poids : string;
    pays : string;
    garantie : string;
    prix_promo : string;
    dt_deb: Date;
    dt_fin: Date;
    tags: Text;
    vu: IntegerDataType;
    youtube: string;
    video: string;
    code: string;
    lien: string;
    majoration: string;
    tva: string;
    commission: string;
    taille: string;
    qte_min: IntegerDataType;
    vente: string;
    vente_exo: string;
    vente_expo: string;
    achat_loc: string;
    achat_imp: string;
    num: IntegerDataType;     

}

export type AddArticleParams = Omit<ArticleEntity, 'id'>
