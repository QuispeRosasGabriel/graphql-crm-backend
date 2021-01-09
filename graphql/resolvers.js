// Resolvers
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: () => 'Creando Nuevo usuario'
    }
}

module.exports = resolvers;