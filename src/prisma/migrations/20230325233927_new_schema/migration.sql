/*
  Warnings:

  - Added the required column `contractAddress` to the `Nft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractType` to the `Nft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `Nft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `server` to the `Nft` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('ERC721', 'ERC1155');

-- CreateEnum
CREATE TYPE "Server" AS ENUM ('MoneyClicc', 'Degenz', 'RugRadio');

-- CreateEnum
CREATE TYPE "Section" AS ENUM ('FakeRekt');

-- AlterTable
ALTER TABLE "Nft" ADD COLUMN     "contractAddress" TEXT NOT NULL,
ADD COLUMN     "contractType" "ContractType" NOT NULL,
ADD COLUMN     "lastSoldDate" TIMESTAMP(3),
ADD COLUMN     "lastSoldPrice" DECIMAL(65,30),
ADD COLUMN     "openSeaSlug" TEXT,
ADD COLUMN     "price" DECIMAL(65,30),
ADD COLUMN     "section" "Section" NOT NULL,
ADD COLUMN     "server" "Server" NOT NULL,
ADD COLUMN     "supply" INTEGER,
ADD COLUMN     "tokenId" INTEGER;
