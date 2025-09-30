const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!  # Must be here!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
  }
  
  type Mutation{
    incrementTrackViews(id:ID!): IncrementTrackViewsResponse!
  }
  type incrementTrackViews{
    code:Int!
    success=Boolean!
    message: String!
    track:Track 
  }
`;

module.exports = typeDefs;
