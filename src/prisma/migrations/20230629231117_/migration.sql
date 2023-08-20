/*
  Warnings:

  - Made the column `openSeaSlug` on table `Nft` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tokenId` on table `Nft` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Nft" ALTER COLUMN "openSeaSlug" SET NOT NULL,
ALTER COLUMN "tokenId" SET NOT NULL;
