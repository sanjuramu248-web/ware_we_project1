import { PostgreSqlDriver } from '@mikro-orm/postgresql';
const config = {
    entities: ['./models'],
    entitiesTs: ['./models'],
    dbName: 'neondb',
    driver: PostgreSqlDriver,
    clientUrl: process.env.DATABASE_URL,
    migrations: {
        path: '../dist/migrations',
        pathTs: './migrations',
    },
};
export default config;
