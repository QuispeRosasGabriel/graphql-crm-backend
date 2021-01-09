const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        obtenerCurso: String,
    }

    type Mutation {
        nuevoUsuario(input: UsuarioInput): Usuario
    }

    type Usuario {
        id: ID,
        nombre: String,
        apellido: String,
        email: String,
        creado: String,
    }
    
    input UsuarioInput {
        nombre: String!,
        apellido: String!,
        email: String!,
        password: String!
    }
`;

module.exports = typeDefs;