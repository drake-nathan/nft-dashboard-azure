/*
  Warnings:

  - You are about to drop the column `collectionSlug` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `contractAddress` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `contractType` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `currentFloor` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `fetchMethod` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `isRldDrop` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `lastSoldDate` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `lastSoldPrice` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `mintDate` on the `Nft` table. All the data in the column will be lost.
  - You are about to drop the column `tokenId` on the `Nft` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Nft" DROP COLUMN "collectionSlug",
DROP COLUMN "contractAddress",
DROP COLUMN "contractType",
DROP COLUMN "currentFloor",
DROP COLUMN "fetchMethod",
DROP COLUMN "isRldDrop",
DROP COLUMN "lastSoldDate",
DROP COLUMN "lastSoldPrice",
DROP COLUMN "mintDate",
DROP COLUMN "tokenId";

-- DropEnum
DROP TYPE "ContractType";

-- DropEnum
DROP TYPE "FetchMethod";
