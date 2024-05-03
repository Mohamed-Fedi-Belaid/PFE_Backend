
import { PgConfiguration } from "@/application/config/pg-instance";
import { MysqlConfiguration } from "@/application/config/mysql-instance";

/**
   * This array has all the singleton instances of the application
   */
export const singletonInitializers: Array<() => Promise<void>> = [

    async () =>
    {
        const pgConfig = PgConfiguration.getInstance();
        await pgConfig.managerConnectionPg();
    },
    async () =>
    {
        const mysqlConfig = MysqlConfiguration.getInstance();
        await mysqlConfig.managerConnectionMysql();
    },
    async () =>
    {
        const mysqlConfig = MysqlConfiguration.getInstance();
        await mysqlConfig.managerConnectionMysql();
    },
    async () =>
    {
        const mysqlConfig = MysqlConfiguration.getInstance();
        await mysqlConfig.managerConnectionMysql();
    },
    async () =>
    {
        const mysqlConfig = MysqlConfiguration.getInstance();
        await mysqlConfig.managerConnectionMysql();
    },
    async () =>
    {
        const mysqlConfig = MysqlConfiguration.getInstance();
        await mysqlConfig.managerConnectionMysql();
    },
    async () =>
    {
        const mysqlConfig = MysqlConfiguration.getInstance();
        await mysqlConfig.managerConnectionMysql();
    },

];
