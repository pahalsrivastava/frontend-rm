const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) =>
      dataSources.trackAPI.getTracksForHome(),
    track: (_, { id }, { dataSources }) =>
      dataSources.trackAPI.getTrack(id),
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try{
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success :  true, 
          message: `Successfully incremented number of views for track ${id}`,
          track,
         };
      } catch(err){
        return{
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),
    modules: ({ id }, _, { dataSources }) =>
      dataSources.trackAPI.getTrackModules(id),
  },
  
};

module.exports = resolvers;
