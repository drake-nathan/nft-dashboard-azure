export const typeDefs = `#graphql
  scalar DateTime

  type Nft {  
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
  }

  type Query {  
    nft(id: ID!): Nft
    allNfts: [Nft]
  }
`;
