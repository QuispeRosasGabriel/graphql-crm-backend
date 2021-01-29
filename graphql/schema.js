const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        #Usuarios
        obtenerUsuario(token: String!): Usuario,
        
        #Productos
        obtenerProductos: [Producto],
        obtenerProducto(id: ID!): Producto,

        #Clientes
        obtenerClientes: [Cliente],
        obtenerClientesVendedor: [Cliente],
        obtenerCliente(id: ID!): Cliente
    }

    type Mutation {
        #Usuario
        nuevoUsuario(input: UsuarioInput): Usuario,
        autenticarUsuario(input: AutenticarInput): Token
        
        #Producto
        nuevoProducto(input: ProductoInput): Producto,
        actualizarProducto(id: ID!, input: ProductoInput  ): Producto,
        eliminarProducto(id:ID!): String

        #Cliente
        nuevoCliente(input: ClienteInput): Cliente,
        actualizarCliente(id: ID!, input: ClienteInput): Cliente
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
    
    type Cliente {
        id: ID,
        nombre: String,
        apellido: String,
        empresa: String,
        email: String,
        telefono: String,
        vendedor: ID
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

    input ClienteInput {
        nombre: String!,
        apellido: String!,
        empresa: String!,
        email: String!,
        telefono: String
    }

    type Token {
        token: String,
    }
`;

module.exports = typeDefs;