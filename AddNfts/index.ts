import type { AzureFunction, Context } from '@azure/functions';
import { collections } from '../src/collections';
import { prisma } from '../src/prisma';
import { fetchCollectionNfts } from './utils/fetchCollectionNfts';
import { PreNft } from './types';

const AddNfts: AzureFunction = async (context: Context): Promise<void> => {
  context.log.info('Checking all collections for new NFTs...');

  const allNfts: PreNft[] = [];

  try {
    for await (const collection of collections) {
      context.log.info(`Fetching nfts for ${collection.name}...`);
      const nfts = await fetchCollectionNfts({ context, collection });
      allNfts.push(...nfts);
    }

    const { count } = await prisma.nft.createMany({
      data: allNfts,
      skipDuplicates: true,
    });

    if (count) {
      context.log.info(`Added ${count} total nfts.`);
    } else {
      context.log.info('No new nfts added');
    }
  } catch (error) {
    context.log.error(error);
  }
};

export default AddNfts;
