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
        obtenerCursos: (_, {input}, context, info) => {
            console.log(context);
            const resultado = cursos.filter((curso) => curso.tecnologia === input.tecnologia);

            return resultado;
        },
    }
}

module.exports = resolvers;