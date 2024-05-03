import { IntegerDataType } from "sequelize"

export type CategorieEntity = {
    id: IntegerDataType;
    nom: string;
    commission: string;
    affiche : IntegerDataType;
    num :IntegerDataType;
    img :string;
    tags : Text;
}

export type AddCategorieParams = Omit<CategorieEntity, 'id'>
