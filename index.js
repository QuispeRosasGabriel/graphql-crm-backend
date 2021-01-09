const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDb = require('./config/db'); 

connectDb();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const myContext = 'Hola'

        return {
            myContext
        }
    }
});

server.listen().then(({url}) => {
    console.log(`Servicor listo en la url ${url}`);
})