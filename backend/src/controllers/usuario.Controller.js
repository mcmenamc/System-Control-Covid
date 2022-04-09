const Usuario = require('../models/Usuario');


const updateUsuarioById = async (req, res) => {
    const { usuarioId } = req.params;
    const { nombre, apellidop, apellidom, fechaNac, sexo, tels, password } = req.body;

    const updateUsuario = await Usuario.findByIdAndUpdate(usuarioId, { nombre, apellidop, apellidom, fechaNac, sexo, tels, password: await Usuario.encryptPassword(password) }, { new: true });

    res.status(204).json(updateUsuario);
};

module.exports = {
    updateUsuarioById 
};
