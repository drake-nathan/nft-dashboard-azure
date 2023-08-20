import { z } from 'zod';
import { formatEther } from 'ethers/lib/utils';
import { openseaSDK } from './index';

const Asset = z.object({
  name: z.string(),
  lastSale: z
    .object({
      eventType: z.string(),
      eventTimestamp: z.string(),
      totalPrice: z.string(),
    })
    .nullable(),
});

interface Return {
  name: string;
  lastSold: {
    date: Date;
    price: string;
  } | null;
}

export const fetchAssetDetails = async (
  address: string,
  tokenId: number,
): Promise<Return> => {
  const asset = await openseaSDK.api.getAsset({
    tokenAddress: address,
    tokenId,
  });

  const { name, lastSale } = Asset.parse(asset);

  const lastSaleSuccessful = lastSale?.eventType === 'successful';

  return {
    name,
    lastSold:
      lastSaleSuccessful && lastSale
        ? {
            date: new Date(lastSale.eventTimestamp),
            price: formatEther(lastSale.totalPrice),
          }
        : null,
  };
};
