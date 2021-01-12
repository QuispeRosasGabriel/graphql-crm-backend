const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'}); 

const crearToken = (usuario, secreta, expiresIn) => {
    console.log(usuario, secreta, expiracion);
    const {id, email, apellido} = usuario;
    return jwt.sign({id}, secreta, {expiresIn});
}

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
                throw new Error('El usuario no existe');
            }

            const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
            if(!passwordCorrecto) {
                throw new Error('El password es incorrecto');
            }

            return {
                token: crearToken(existeUsuario, process.env.SEED, '24h')
            }
        }
    }
}

module.exports = resolvers;