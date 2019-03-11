const { GraphQLServer } = require('graphql-yoga');
const db = require('./db');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  })
}

module.exports = createServer;
