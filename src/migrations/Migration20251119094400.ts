import { Migration } from '@mikro-orm/migrations';

export class Migration20251119094400 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "request_history" alter column "headers" type jsonb using ("headers"::jsonb);`);
    this.addSql(`alter table "request_history" alter column "headers" drop not null;`);
    this.addSql(`alter table "request_history" alter column "body" type text using ("body"::text);`);
    this.addSql(`alter table "request_history" alter column "body" drop not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "request_history" alter column "headers" type jsonb using ("headers"::jsonb);`);
    this.addSql(`alter table "request_history" alter column "headers" set not null;`);
    this.addSql(`alter table "request_history" alter column "body" type text using ("body"::text);`);
    this.addSql(`alter table "request_history" alter column "body" set not null;`);
  }

}
