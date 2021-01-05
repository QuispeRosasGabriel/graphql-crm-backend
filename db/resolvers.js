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
        obtenerCursos: () => cursos[0],
        obtenerTecnologia: () => cursos
    }
}

module.exports = resolvers;