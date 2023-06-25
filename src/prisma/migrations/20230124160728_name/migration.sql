/*
  Warnings:

  - Added the required column `name` to the `Nft` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nft" ADD COLUMN     "name" TEXT NOT NULL;
