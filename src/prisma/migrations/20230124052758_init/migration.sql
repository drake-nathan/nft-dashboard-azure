-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('ERC20', 'ERC721', 'ERC1155', 'PEPE');

-- CreateEnum
CREATE TYPE "FetchMethod" AS ENUM ('API', 'SCRAPE');

-- CreateTable
CREATE TABLE "Nft" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "collectionSlug" TEXT,
    "contractAddress" TEXT,
    "contractType" "ContractType" NOT NULL,
    "fetchMethod" "FetchMethod" NOT NULL,
    "mintDate" TIMESTAMP(3),
    "isRldDrop" BOOLEAN,
    "currentFloor" TEXT,
    "lastSoldDate" TIMESTAMP(3),
    "lastSoldPrice" TEXT,
    "tokenId" INTEGER,

    CONSTRAINT "Nft_pkey" PRIMARY KEY ("id")
);
