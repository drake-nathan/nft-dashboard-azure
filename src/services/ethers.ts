import { config as dotenvConfig } from 'dotenv';
import { ethers } from 'ethers';

dotenvConfig();

const infuraKey = process.env.INFURA_KEY;

if (!infuraKey) {
  throw new Error('INFURA_KEY is not set');
}

export const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${infuraKey}`,
);
