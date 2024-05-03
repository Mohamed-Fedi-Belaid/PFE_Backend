import { ArticleController } from "./article-controller";
import { CategorieController } from "./categorie-controller";
import { CommandeControlle } from "./commande-controller";
import { DetailCommandeController } from "./detailCommande-controller";
import { FournisseurController } from "./fournisseur-controller";
import { PdvController } from "./pdv-controller";

import { UserController } from "./userController";

export const controllers = [
    UserController,
    FournisseurController,
    PdvController,
    ArticleController,
    CategorieController,
    CommandeControlle,
    DetailCommandeController,
   
];