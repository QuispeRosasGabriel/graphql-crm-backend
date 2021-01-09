
const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        obtenerCurso: String,
    }

    type Mutation {
        nuevoUsuario: String
    }

    type Usuario {
        id: ID,
        nombre: String,
        apellido: String,
        email: String,
        creado: String,
    }
`;

module.exports = typeDefs;