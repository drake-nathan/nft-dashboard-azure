import { z } from 'zod';
import { openseaSDK } from './index';

const Asset = z.object({
  name: z.string(),
});

export const fetchAssetName = async (
  address: string,
  tokenId: number,
): Promise<string> => {
  const asset = await openseaSDK.api.getAsset({
    tokenAddress: address,
    tokenId,
  });

  const { name } = Asset.parse(asset);

  return name;
};
