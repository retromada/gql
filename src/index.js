import Server from './server'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

Server({ typeDefs, resolvers })
