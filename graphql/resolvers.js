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
        obtenerCurso: () => "Algo"
    }
}

module.exports = resolvers;