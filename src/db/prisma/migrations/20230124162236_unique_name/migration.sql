/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Nft` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Nft_name_key" ON "Nft"("name");
