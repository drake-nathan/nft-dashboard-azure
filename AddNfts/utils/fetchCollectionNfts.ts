/* eslint-disable no-await-in-loop */
/* eslint-disable no-constant-condition */
import { Collection } from '../../src/collections';
import { fetchAssetName } from '../../src/services/opensea/fetchAsset';
import type { PreNft } from '..';

export const fetchCollectionNfts = async (
  collection: Collection,
): Promise<PreNft[]> => {
  const { contractAddress, contractType, openSeaSlug, section, server } =
    collection;

  const nfts: PreNft[] = [];

  // NOTE: We are not sure how many tokens a collection has, so we iterate until OpenSea returns an error
  let i = 0;
  while (true) {
    try {
      const name = await fetchAssetName(collection.contractAddress, i);

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
        lastSoldDate: null,
        lastSoldPrice: null,
      };

      nfts.push(nft);

      i += 1;
    } catch {
      // NOTE: The collection may not be zero indexed
      if (i === 0) {
        i += 1;
        continue;
      } else {
        break;
      }
    }
  }

  return nfts;
};
