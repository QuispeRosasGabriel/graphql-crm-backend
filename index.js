const {ApolloServer, gql} = require('apollo-server');

// Schema
const typeDefs = gql`
    type Curso {
        titulo: String
        tecnologia: String        
    }

    type Query {
        obtenerCursos : Curso
    }
`;

const cursos = [
    {
        titulo: 'Aprende JS',
        tecnologia: 'JS'
    },
    {
        titulo: 'Aprende React',
        tecnologia: 'React'
    },
    {
        titulo: 'Aprende Angular',
        tecnologia: 'Angular'
    },
    {
        titulo: 'Aprende Ember',
        tecnologia: 'Ember'
    },
]

// Resolvers
const resolvers = {
    Query: {
        obtenerCursos: () => cursos[0]
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log(`Servicor listo en la url ${url}`);
})