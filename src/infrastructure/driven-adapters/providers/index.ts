import { USER_REPOSITORY } from "@/domain/entities/contracts/user-repository";
import { UserPgRepositoryAdapter } from "../adapters/orm/sequelize/user-pg-repository-adapter";
import { USER_SERVICES } from "@/domain/use-cases/user-service";
import { UserServiceImpl } from "@/domain/use-cases/impl/user-service-impl";
import { FOURNISSEUR_REPOSITORY } from "@/domain/entities/contracts/fournisseur-repository";
import { FournisseurMysqlRepositoryAdapter } from "../adapters/orm/sequelize/fournisseur-mysql-repository-adapter";
import { FOURNISSEUR_SERVICES } from "@/domain/use-cases/fournisseur-service";
import { FournisseurServiceImpl } from "@/domain/use-cases/impl/fournisseur-service-impl";
import { PDV_REPOSITORY } from "@/domain/entities/contracts/pdv-repository";
import { PdvMysqlRepositoryAdapter } from "../adapters/orm/sequelize/pdv-mysql-repository-adapter";
import { PdvServiceImpl } from "@/domain/use-cases/impl/pdv-service-impl";
import { PDV_SERVICES } from "@/domain/use-cases/pdv-service";
import { ARTICLE_REPOSITORY } from "@/domain/entities/contracts/article-repository";
import { ArticleMysqlRepositoryAdapter } from "../adapters/orm/sequelize/article-mysql-repository-adapter";
import { ARTICLE_SERVICES } from "@/domain/use-cases/article-service";
import { ArticleServiceImpl } from "@/domain/use-cases/impl/article-service-impl";
import { CATEGORIE_REPOSITORY } from "@/domain/entities/contracts/categorie-repository";
import { CategorieMysqlRepositoryAdapter } from "../adapters/orm/sequelize/categorie-mysql-repository-adapter";
import { CategorieServiceImpl } from "@/domain/use-cases/impl/categorie-service-impl";
import { CATEGORIE_SERVICES } from "@/domain/use-cases/categorie-service";
import { CommandeMysqlRepositoryAdapter } from "../adapters/orm/sequelize/commande-mysql-repository-adapter";
import { COMMANDE_REPOSITORY } from "@/domain/entities/contracts/commande-repository";
import { CommandeServiceImpl } from "@/domain/use-cases/impl/commande-service-impl";
import { COMMANDE_SERVICES } from "@/domain/use-cases/commande-service";
import { DETAILCOMMANDE_SERVICES } from "@/domain/use-cases/detailCommande-service";
import { DetailCommandeServiceImpl } from "@/domain/use-cases/impl/detailCommande-service-impl";
import { DetailCommandeMysqlRepositoryAdapter } from "../adapters/orm/sequelize/detailCommande-mysql-repository-adapter";
import { DETAILCOMMANDE_REPOSITORY } from "@/domain/entities/contracts/detailCommande-repository";


export const adapters = [
    {
        useClass: UserPgRepositoryAdapter,
        provide: USER_REPOSITORY
    },
    {
        useClass: FournisseurMysqlRepositoryAdapter,
        provide: FOURNISSEUR_REPOSITORY
    },
    {
        useClass: PdvMysqlRepositoryAdapter,
        provide: PDV_REPOSITORY
    },
    {
        useClass: ArticleMysqlRepositoryAdapter,
        provide: ARTICLE_REPOSITORY
    },
    {
        useClass: CategorieMysqlRepositoryAdapter,
        provide: CATEGORIE_REPOSITORY
    },
    {
        useClass: CommandeMysqlRepositoryAdapter,
        provide: COMMANDE_REPOSITORY
    },
    {
        useClass: DetailCommandeMysqlRepositoryAdapter,
        provide: DETAILCOMMANDE_REPOSITORY
    }
];
        
export const services = [
    {
        useClass: UserServiceImpl,
        provide: USER_SERVICES
    },
    {
        useClass: FournisseurServiceImpl,
        provide: FOURNISSEUR_SERVICES
    },
    {
        useClass: PdvServiceImpl,
        provide: PDV_SERVICES
    },
    {
        useClass: ArticleServiceImpl,
        provide: ARTICLE_SERVICES
    },
    {
        useClass: CategorieServiceImpl,
        provide: CATEGORIE_SERVICES
    },
    {
        useClass: CommandeServiceImpl,
        provide: COMMANDE_SERVICES
    },
    {
        useClass: DetailCommandeServiceImpl,
        provide: DETAILCOMMANDE_SERVICES
    }

];