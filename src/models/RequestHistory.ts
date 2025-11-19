import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class RequestHistory {
  @PrimaryKey()
  id!: number;

  @Property()
  method!: string;

  @Property()
  url!: string;

  @Property({ type: 'json', nullable: true })
  headers?: Record<string, string>;

  @Property({ type: 'text', nullable: true })
  body?: string;

  @Property({ type: 'text' })
  response!: string;

  @Property()
  statusCode!: number;

  @Property()
  timestamp: Date = new Date();
}