import { ApolloServer } from '@apollo/server';
import { DateTimeResolver } from 'graphql-scalars';
import { type Resolvers } from '../../generated/graphql';
import { typeDefs } from '../graphqlSchema';
import { prismaClient } from '../prisma';

const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
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
