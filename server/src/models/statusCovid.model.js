const mysqlConnection = require('../config/database');


const getStatusCovid = (result) => {
    mysqlConnection.query('SELECT * FROM statuscovid AS C INNER JOIN sintomas AS S ON(c.fksintomas = S.id_Sintoma) INNER JOIN persona AS P ON (C.fkpersona = P.matricula)', (err, rows, fields) => {
        if (!err) {
            const sintomas =  rows.map(row => {
                return {
                    matricula: row.matricula,
                    nombreCompleto: row.nombre+' '+row.apellidoP+' '+row.apellidoM,
                    foto: row.fotoUrl,
                    correo: row.email,
                    sexo: row.sexo,
                    edad: row.edad,
                    temperatura: row.temperatura,
                    sintomas: row.nombreSintomas.slice(1, -1).replace(/"/g, "").split(", "),
                    telefono: row.telefonoPersona,
                    fechaIngreso: row.fechaIngreso,
                };
            });
            result(null, sintomas);
        } else {
            result(err, null);
        }
    }); 
};

module.exports = {
    getStatusCovid
};
