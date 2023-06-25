import { prisma } from '.';

export const getAllNfts = () => prisma.nft.findMany();
