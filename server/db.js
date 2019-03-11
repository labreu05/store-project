const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.FRONTEND_URL,
  secret: process.env.PRISMA_SECRET,
  debug: true,
});

module.exports = db;
