import type { AzureFunction, Context } from '@azure/functions';
import { prisma } from '../src/prisma';

const GetNfts: AzureFunction = async (context: Context): Promise<void> => {
  try {
    const nfts = await prisma.nft.findMany();

    context.res = {
      status: 200,
      body: nfts,
    };
  } catch (error) {
    context.log.error(error);
    if (process.env.NODE_ENV === 'test') console.error(error);
    context.res = {
      status: 500,
      body: 'Internal Server Error',
    };
  }
};

export default GetNfts;
