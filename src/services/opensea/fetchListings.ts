import axios from 'axios';
import { z } from 'zod';
import { formatEther } from 'ethers/lib/utils';
import { openseaApiKey } from '.';

const Listing = z.object({
  current_price: z.string(),
});

export const fetchListings = async (address: string, tokenId: number) => {
  const chain = 'ethereum';
  const url = `https://api.opensea.io/v2/orders/${chain}/seaport/listings`;

  const params = {
    asset_contract_address: address,
    token_ids: tokenId,
    order_by: 'eth_price',
    order_direction: 'asc',
  };

  const config = {
    params,
    headers: {
      'X-API-KEY': openseaApiKey,
    },
  };

  const { data } = await axios.get(url, config);

  const listings = data.orders.map((order: unknown) => {
    const { current_price } = Listing.parse(order);
    return formatEther(current_price);
  });

  return listings;
};
