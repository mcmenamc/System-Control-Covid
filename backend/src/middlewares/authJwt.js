const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');

const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"]

        if (!token) return res.status(403).json({ message: "No se proporcionó token" });

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userId = decoded.id;

        const user = await Usuario.findById(req.userId, { password: 0 });

        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        next();
    }
    catch (error) {
        return res.status(500).json({ message: "Error al verificar token" });
    }
};

const verifyAdmin = async (req, res, next) => {
    const usuario = await Usuario.findById(req.userId);
    const roles = Role = await Rol.find({_id:{$in:usuario.roles}});
    for(let i = 0; i < roles.length; i++){
        if(roles[i].nombre == "administrador"){
            next();
            return;
        }
    }
    return res.status(403).json({ message: "Requiero el rol de Administrador" });
};

const verifyUser = async (req, res, next) => {
    const usuario = await Usuario.findById(req.userId);
    const roles = Role = await Rol.find({_id:{$in:usuario.roles}});
    for(let i = 0; i < roles.length; i++){
        if(roles[i].nombre === 'alumno'){
            next();
            return
        }
    }
    return res.status(403).json({ message: "Requiero el rol de Alumno" });
};


module.exports = {
    verifyToken,
    verifyAdmin,
    verifyUser
}
