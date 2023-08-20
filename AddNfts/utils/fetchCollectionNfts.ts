import { Prisma } from '@prisma/client';
import type { Context } from '@azure/functions';
import { Collection } from '../../src/collections';
import { fetchAssetDetails } from '../../src/services/opensea/fetchAssetDetails';
import type { PreNft } from '../types';

interface Params {
  context: Context;
  collection: Collection;
}

export const fetchCollectionNfts = async ({
  context,
  collection,
}: Params): Promise<PreNft[]> => {
  const { contractAddress, contractType, openSeaSlug, section, server } =
    collection;

  const nfts: PreNft[] = [];

  // NOTE: We are not sure how many tokens a collection has, so we iterate until OpenSea returns an error
  let i = 0;
  while (true) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const { name, lastSold } = await fetchAssetDetails(
        collection.contractAddress,
        i,
      );

      const nft: PreNft = {
        name,
        contractAddress,
        contractType,
        openSeaSlug,
        section,
        server,
        tokenId: i,
        price: null,
        supply: null,
        lastSoldDate: lastSold?.date ?? null,
        lastSoldPrice: new Prisma.Decimal(lastSold?.price ?? 0) || null,
      };

      nfts.push(nft);

      i += 1;
    } catch (error: any) {
      // NOTE: The collection may not be zero indexed
      if (i === 0 && error?.status && error.status === 404) {
        i += 1;
        continue;
      }
      // NOTE: If we get a 404, we have reached the end of the collection
      if (error?.status && error.status === 404) {
        break;
      }

      context.log.error(error);
    }
  }

  return nfts;
};
