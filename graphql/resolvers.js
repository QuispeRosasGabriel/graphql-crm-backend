const Usuario = require('../models/Usuario');
const Producto = require('../models/Producto');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../models/Usuario');
require('dotenv').config({path: 'variables.env'}); 

const crearToken = (usuario, secreta, expiresIn) => {
    const {id, email, nombre, apellido} = usuario;
    return jwt.sign({id, email, nombre, apellido}, secreta, {expiresIn});
}

// Resolvers
const resolvers = {
    Query: {
        obtenerUsuario: async(_, {token}) => {
            const usuarioId = await jwt.verify(token, process.env.SEED);
            return usuarioId;
        },
        obtenerProductos: async() =>{
            try {
                const productos = await Producto.find({});
                return productos;
            } catch (error) {
                console.log(error);
            }
        }
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
        },
        nuevoProducto: async(_, {input}) => {
            const {nombre} = input;
            const existeProducto = await Producto.findOne({nombre});

            if(!!existeProducto) {
                throw new Error('El producto ingresado, ya está registrado');
            }

            try {
                const nuevoProducto = new Producto(input);
                const resultado = await nuevoProducto.save();
                return resultado;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = resolvers;