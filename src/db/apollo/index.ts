import { ApolloServer } from '@apollo/server';
import { DateTimeResolver } from 'graphql-scalars';
import type { Resolvers, Nft } from '../../generated/graphql';
import { typeDefs } from '../graphqlSchema';
import { prismaClient } from '../prisma';

const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    allNfts: async () => {
      const nfts = await prismaClient.nft.findMany();
      return nfts as Nft[];
    },
    nft: async (_, { id }) => {
      const nft = await prismaClient.nft.findUnique({ where: { id } });
      if (!nft) {
        throw new Error(`NFT not found for id: ${id}`);
      }
      return nft as Nft;
    },
  },
};

export const apolloServer = new ApolloServer({ typeDefs, resolvers });
