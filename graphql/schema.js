const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        #Usuarios
        obtenerUsuario(token: String!): Usuario,
        
        #Productos
        obtenerProductos: [Producto],
        obtenerProducto(id: ID!): Producto,
    }

    type Mutation {
        #Usuario
        nuevoUsuario(input: UsuarioInput): Usuario,
        autenticarUsuario(input: AutenticarInput): Token
        
        #Producto
        nuevoProducto(input: ProductoInput): Producto,
        actualizarProducto(id: ID!, input: ProductoInput  ): Producto,
        eliminarProducto(id:ID!): String
    }

    type Usuario {
        id: ID,
        nombre: String,
        apellido: String,
        email: String,
        creado: String,
    }

    type Producto {
        id: ID,
        nombre: String,
        precio: String,
        existencia: String,
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

    input ProductoInput {
        nombre: String!,
        existencia: Int!,
        precio: Float!
    }

    type Token {
        token: String,
    }
`;

module.exports = typeDefs;