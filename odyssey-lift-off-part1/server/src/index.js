const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

const schema = makeExecutableSchema({ typeDefs, resolvers });

async function startApolloServer() {
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    context: async () => ({
      dataSources: {
        trackAPI: new TrackAPI({ cache: server.cache }),
      },
    }),
  });

  console.log(`🚀 Server running at ${url}`);
}

startApolloServer();
