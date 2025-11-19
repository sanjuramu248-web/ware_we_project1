import { MikroORM } from '@mikro-orm/core';
import config from '../mikro-orm.config';

let orm: MikroORM;

export async function initORM() {
  if (!orm) {
    console.log('Initializing MikroORM...');
    try {
      orm = await MikroORM.init(config);
      console.log('MikroORM initialized successfully');
    } catch (error) {
      console.error('Failed to initialize MikroORM:', error);
      throw error;
    }
  }
  return orm;
}

