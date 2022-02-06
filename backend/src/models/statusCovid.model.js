const mysqlConnection = require('../config/database');

const getStatusCovid = async (result) => {
    try {
        const [rows] = await mysqlConnection.query('SELECT * FROM statusCovid AS c INNER JOIN sintomas AS s ON(c.fkSintomas = s._idSintoma) INNER JOIN persona AS p ON (c.fkPersona = p.matricula)');
        const sintomas = await rows.map(row => {
            return {
                matricula: row.matricula,
                nombreCompleto: row.nombre + ' ' + row.apellidoP + ' ' + row.apellidoM,
                foto: row.fotoUrl,
                correo: row.email,
                sexo: row.sexo,
                edad: row.edad,
                temperatura: row.temperatura,
                sintomas: row.nombreSintomas.replace(/["[\]]/g, '').split(', '), // eliminar comillas y separar por comas
                // sintomas: row.nombreSintomas, // descomentar si estas en clever cloud
                telefono: row.telefonoPersona,
                fechaIngreso  : row.fechaIngreso,
            };
        });
        result(null, sintomas);
    } catch (error) {
        result(error, null);
    }
};


module.exports = {
    getStatusCovid
};
