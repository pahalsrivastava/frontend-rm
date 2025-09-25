const { ApolloServer } =require("@apollo/server");
const { startStandaloneServer }= require("@apollo/server/standalone");
const typeDefs = require("./schema");
//const { addMocksToSchema } = require("@graphql-tools/mock");
//const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require('./resolvers');
const TrackAPI = require("./track-api");

/*const mocks = {
    Query: () =>({
        tracksForHome: () => [...new Array(6)],
    }),
    Track:()=>({
        id:() => "track_01",
        title: () => "Astro Space Explorer",
        author: () => {
            return{
                name:"grumpy cat",
                photo: "https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/catstrophysicist_bqfh9n_j0amow.jpg",
            };
        },
        thumbnail: () =>
            "https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg",
        length: () =>1210,
        modulesCount: () => 6,
    }),
};
*/
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
       
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}
 
startApolloServer();