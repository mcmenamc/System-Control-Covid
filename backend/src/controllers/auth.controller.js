const UsuarioSchema = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const Rol = require('../models/Rol');

const singUp = async (req, res) => {    

    const { nombre, apellidop, apellidom, email, password, rol, fechaNac, sexo, tels } = req.body;

    const  verifyEmail = await UsuarioSchema.findOne({email});

    if(verifyEmail) return res.status(400).json({message: 'El email ya esta registrado'});

    const newUsuario = new UsuarioSchema({
        nombre,
        apellidop,
        apellidom,
        email,
        password: await UsuarioSchema.encryptPassword(password),
        fechaNac: fechaNac ? fechaNac : null,
        sexo: sexo ? sexo : null,
        tels: tels ? tels : null,
    });
    
    if (rol) {
        const rolesDB = await Rol.findOne({nombre: {$in:rol} });
        newUsuario.rol = rolesDB._id;
    }else{
        const role = await Rol.findOne({ nombre: 'alumno' });
        console.log(role);
        newUsuario.rol = role._id;
    }

    const saveUsuario = await newUsuario.save();

    const tokenSecret = process.env.TOKEN_SECRET;

    const token = jwt.sign({id:saveUsuario._id}, tokenSecret ,{
        expiresIn: 86400
    });

    res.status(200).json(token);
};
const signin = async (req, res) => {

    const { email, password } = req.body;

    const usuario = await UsuarioSchema.findOne({email}).populate('rol');

    if(!usuario) return res.status(400).json({message: 'Usuario no encontrado'});

    const matchpassword = await UsuarioSchema.comparePassword(password, usuario.password);
    
    if(!matchpassword) return res.status(400).json({token: null, message: 'Contraseña incorrecta'});
    
    if(!usuario.status) return res.status(400).json({token: null, message: 'Usuario inactivo'});

    const tokenSecret = process.env.TOKEN_SECRET;

    const token = jwt.sign({id:usuario._id}, tokenSecret,{
        expiresIn: 86400
    });
    res.status(200).json({token});
};

module.exports = {
    singUp,
    signin
};