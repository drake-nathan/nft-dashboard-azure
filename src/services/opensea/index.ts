import { config as dotenvConfig } from 'dotenv';
import { OpenSeaSDK, Chain } from 'opensea-js';
import { provider } from '../ethers';

dotenvConfig();

export const openseaApiKey = process.env.OPENSEA_API_KEY;

if (!openseaApiKey) {
  throw new Error('OPENSEA_API_KEY is not set');
}

export const openseaSDK = new OpenSeaSDK(provider, {
  chain: Chain.Mainnet,
  apiKey: openseaApiKey,
});
