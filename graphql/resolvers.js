const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
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

            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

            try {
                  const usuario = new Usuario(input);
                  usuario.save();
                  return usuario; 
            } catch (error) {
                console.log(error);
            }
        },
        autenticarUsuario: async (_, {input}) => {
            const {email, password} = input;
            const existeUsuario = await Usuario.findOne({email});
            
            if(!existeUsuario) {
                throw new Error('El usuario no existe')
            }

            

        }
    }
}

module.exports = resolvers;