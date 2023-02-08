import { ApolloServer } from '@apollo/server';
import { DateResolver } from 'graphql-scalars';
import { type Resolvers } from '../../generated/graphql';
import { typeDefs } from '../graphqlSchema';
import { prismaClient } from '../prisma';

const resolvers: Resolvers = {
  Date: DateResolver,
  Query: {
    allNfts: async () => {
      const nfts = await prismaClient.nft.findMany();
      return nfts;
    },
    nft: async (_, { id }) => {
      const nft = await prismaClient.nft.findUnique({ where: { id } });
      return nft;
    },
  },
};

export const apolloServer = new ApolloServer({ typeDefs, resolvers });
