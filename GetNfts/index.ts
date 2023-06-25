import type { AzureFunction, Context } from '@azure/functions';
import { getAllNfts } from '../src/prisma/queries';

const GetNfts: AzureFunction = async (context: Context): Promise<void> => {
  try {
    const nfts = await getAllNfts();

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
