const mysqlConnection = require('../config/database');

const getStatusCovid = async (result) => {
    try {
        const [rows] = await mysqlConnection.query('SELECT * FROM statusCovid AS c INNER JOIN sintomas AS s ON(c.fkSintomas = s._idSintoma) INNER JOIN personas AS p ON (c.fkPersona = p._idPersona)');
        const sintomas = await rows.map(row => {
            return {
                _idPersona: row._idPersona,
                nombreCompleto: row.nombre + ' ' + row.apellidoP + ' ' + row.apellidoM,
                foto: row.fotoUrl,
                correo: row.email,
                sexo: row.sexo,
                edad: row.edad,
                temperatura: row.temperatura,
                sintomas: row.nombreSintomas.replace(/["[\]]/g, '').split(', '), // eliminar comillas y separar por comas
                // sintomas: row.nombreSintomas, // descomentar si estas en clever cloud
                telefono: row.telefonoPersona,
                fechaIngreso: row.fechaIngreso,
            };
        });
        
        result(null, sintomas);
    } catch (error) {
        result(error, null);
    }
};

const getStatuCovid = async (params, result) => {
    const { _idPersona } = params;
    try {
        const [rows] = await mysqlConnection.query('SELECT * FROM statusCovid AS c INNER JOIN sintomas AS s ON(c.fkSintomas = s._idSintoma) INNER JOIN personas AS p ON (c.fkPersona = p._idPersona) WHERE p._idPersona = ?', [_idPersona]);
        if (rows.length > 0) {
            const sintomas = await {
                _idPersona: rows[0]._idPersona,
                nombreCompleto: rows[0].nombre + ' ' + rows[0].apellidoP + ' ' + rows[0].apellidoM,
                foto: rows[0].fotoUrl,
                correo: rows[0].email,
                sexo: rows[0].sexo,
                edad: rows[0].edad,
                temperatura: rows[0].temperatura,
                sintomas: rows[0].nombreSintomas.replace(/["[\]]/g, '').split(', '), // eliminar comillas y separar por comas
                telefono: rows[0].telefonoPersona,
                fechaIngreso: rows[0].fechaIngreso,
            };
            result(null, sintomas);
        } else {
            result(null, []);
        }
    }
    catch (error) {
        result(error, null);
    }
}




module.exports = {
    getStatusCovid,
    getStatuCovid
};
