const mysqlConnection = require('../config/database');


 const getStatusCovid = (result) => {
    mysqlConnection.query('SELECT * FROM statusCovid', (err, rows, fields) => {
        if (!err) {
            const sintomas = rows.map(row => {
                return {
                    _idStatus: row._idStatus,
                    temperatura: row.temperatura,
                    fecha: row.fecha,
                    hora: row.hora,
                    fkMatricula: row.fkMatricula,
                    sintomas: row.sintomas.slice(1, -1).replace(/"/g, "").split(',')
                }
            });
            result(null, sintomas);
        } else {
            result(err, null);
        }
    });
}

module.exports = {
    getStatusCovid
}
