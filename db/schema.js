
const {gql} = require('apollo-server');

const typeDefs = gql`
    type Curso {
        titulo: String
        tecnologia: String        
    }

    type Tecnologia {
        tecnologia: String
    }

    input CursoInput {
        tecnologia: String
    }

    type Query {
        obtenerCursos(input: CursoInput!) : [Curso],
        obtenerTecnologia: [Tecnologia]
    }
`;

module.exports = typeDefs;