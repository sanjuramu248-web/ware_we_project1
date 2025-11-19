import { MikroORM } from '@mikro-orm/core';
import config from '../mikro-orm.config';
export const orm = await MikroORM.init(config);
export async function getPgVersion() {
    const connection = orm.em.getConnection();
    const result = await connection.execute('SELECT version()');
    console.log(result[0]);
}
