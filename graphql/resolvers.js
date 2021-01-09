const Usuario = require('../models/Usuario');

// Resolvers
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: async (_, {input}) => {
            
            const { email, password } = input;
            
            // Revisar si el usuario esta registrado
            const existeUsuario = await Usuario.findOne({email});
            if(existeUsuario) {
                throw new Error('El usuario ya existe')
            }

            try {
                  const usuario = new Usuario(input);
                  usuario.save();
                  return usuario; 
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = resolvers;