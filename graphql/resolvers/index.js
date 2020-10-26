const usersResolvers = require('./users')

module.exports = {
  Query: {
    test: () => "hello",
    ...usersResolvers.Query
  },
  Mutation:{
    ...usersResolvers.Mutation
  }
}