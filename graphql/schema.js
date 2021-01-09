const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        obtenerCurso: String,
    }

    type Mutation {
        nuevoUsuario(input: UsuarioInput): Usuario,
        autenticarUsuario(input: AutenticarInput): Token
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

    input AutenticarInput {
        email: String!,
        password: String!
    }

    type Token {
        token: String,
    }
`;

module.exports = typeDefs;