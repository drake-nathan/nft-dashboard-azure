import type { AzureFunction, Context } from '@azure/functions';
import { prisma } from '../src/prisma';
import { fetchFloorPrice } from '../src/services/opensea/fetchFloorPrice';

const AddNfts: AzureFunction = async (context: Context): Promise<void> => {
  context.log.info('Fetching floors for all NFTs');

  try {
    const nfts = await prisma.nft.findMany();

    const promises = nfts.map(async (nft) => {
      const floor = await fetchFloorPrice(nft.contractAddress, nft.tokenId);

      await prisma.nft.update({
        where: {
          id: nft.id,
        },
        data: {
          price: floor,
        },
      });
    });

    await Promise.allSettled(promises);

    context.log.info('Finished fetching floors for all NFTs');
  } catch (error) {
    context.log.error(error);
  }
};

export default AddNfts;
