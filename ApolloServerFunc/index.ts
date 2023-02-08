import type { ApolloServer, BaseContext } from '@apollo/server';
import { startServerAndCreateHandler } from '@as-integrations/azure-functions';
import { apolloServer } from '../src/db/apollo';

export default startServerAndCreateHandler(
  apolloServer as unknown as ApolloServer<BaseContext>,
);
