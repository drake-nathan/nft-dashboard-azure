import type { AzureFunction, Context } from '@azure/functions';
import type { Nft } from '@prisma/client';
import { collections } from '../src/collections';
import { prisma } from '../src/prisma';
import { fetchCollectionNfts } from './utils/fetchCollectionNfts';

export type PreNft = Omit<Nft, 'id' | 'createdAt' | 'updatedAt'>;

const AddNfts: AzureFunction = async (context: Context): Promise<void> => {
  const allNfts: PreNft[] = [];

  try {
    for await (const collection of collections) {
      const nfts = await fetchCollectionNfts(collection);
      allNfts.push(...nfts);
    }

    const { count } = await prisma.nft.createMany({
      data: allNfts,
      skipDuplicates: true,
    });

    if (count) {
      context.log.info(`Added ${count} nfts`);
    } else {
      context.log.info('No new nfts added');
    }
  } catch (error) {
    context.log.error(error);
  }
};

export default AddNfts;
