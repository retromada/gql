import { ApolloServer } from 'apollo-server'

export default ({ typeDefs, resolvers }) => {
  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen()
}
