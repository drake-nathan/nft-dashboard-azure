/*
  Warnings:

  - The values [FakeRekt] on the enum `Section` will be removed. If these variants are still used in the database, this will fail.
  - The values [MoneyClicc] on the enum `Server` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Section_new" AS ENUM ('OsfSeason2');
ALTER TABLE "Nft" ALTER COLUMN "section" TYPE "Section_new" USING ("section"::text::"Section_new");
ALTER TYPE "Section" RENAME TO "Section_old";
ALTER TYPE "Section_new" RENAME TO "Section";
DROP TYPE "Section_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Server_new" AS ENUM ('Degenz', 'RugRadio');
ALTER TABLE "Nft" ALTER COLUMN "server" TYPE "Server_new" USING ("server"::text::"Server_new");
ALTER TYPE "Server" RENAME TO "Server_old";
ALTER TYPE "Server_new" RENAME TO "Server";
DROP TYPE "Server_old";
COMMIT;
