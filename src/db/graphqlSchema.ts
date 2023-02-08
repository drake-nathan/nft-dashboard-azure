export const typeDefs = `#graphql
  scalar Date

  type Nft {  
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    name: String!
  }

  type Query {  
    nft(id: ID!): Nft
    allNfts: [Nft]
  }
`;
