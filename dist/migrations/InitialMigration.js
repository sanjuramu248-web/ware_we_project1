import { Migration } from '@mikro-orm/migrations';
export class InitialMigration extends Migration {
    async up() {
        this.addSql('create table "request_history" ("id" serial primary key, "method" varchar(255) not null, "url" varchar(255) not null, "headers" jsonb null, "body" text null, "response" text not null, "status_code" int not null, "timestamp" timestamptz(0) not null);');
    }
}
