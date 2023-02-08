import type { AzureFunction, Context } from '@azure/functions';
import { apolloServer } from '../src/db/apollo';

const timerTrigger: AzureFunction = async (context: Context): Promise<void> => {};

export default timerTrigger;
