import { Migration } from '@mikro-orm/migrations';

export class Migration20251119093612 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "request_history" ("id" serial primary key, "method" varchar(255) not null, "url" varchar(255) not null, "headers" jsonb not null, "body" text not null, "response" text not null, "status_code" int not null, "timestamp" timestamptz not null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "request_history" cascade;`);
  }

}
