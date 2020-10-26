require('dotenv').config()
const apollo = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers/index')
const { DB_CONNECTION } = process.env


const server = new apollo.ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
})

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true })
  .then(()=>{
    console.log('mongodb connected')
    return server.listen({ port: 5000})
  })
  .then((res)=>{
    console.log(`server running at ${res.url}`)
  })