const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDb = require('./config/db'); 
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

connectDb();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
     //   console.log(req.headers['authorization']);
        const token = req.headers['authorization'] || '';

        if(token) {
            try {
                const usuario = jwt.verify(token, process.env.SEED);
                return {
                    usuario
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
});

server.listen().then(({url}) => {
    console.log(`Servicor listo en la url ${url}`);
})