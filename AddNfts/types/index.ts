import type { Nft } from '@prisma/client';

export type PreNft = Omit<Nft, 'id' | 'createdAt' | 'updatedAt'>;
