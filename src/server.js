import { ApolloServer } from 'apollo-server'

export default function initialize ({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen()
}
