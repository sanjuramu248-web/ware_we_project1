import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import dotenv from 'dotenv';

dotenv.config();

const config: Options = {
  entities: ['dist/models/*.js'],       // runtime JS files
  entitiesTs: ['src/models/*.ts'],      // TS source files

  dbName: 'neondb',
  driver: PostgreSqlDriver,
  clientUrl: process.env.DATABASE_URL,

  driverOptions: {
    connection: {
      ssl: { rejectUnauthorized: false },
    },
  },

  migrations: {
    path: 'dist/migrations',   // where migrations are emitted
    pathTs: 'src/migrations',  // where TS migrations live
  },
};

export default config;
