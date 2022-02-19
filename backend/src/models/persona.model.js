const mysqlConnection = require('../config/database');

// Obtener todos los registros de la tabla Persona
const getpersonas = async (result) => {
    try {
        const [rows] = await mysqlConnection.query('SELECT * FROM personas');
        const personas = rows.map(row => {
            return {
                matricula: row.matricula,
                nombreCompleto: row.nombre + ' ' + row.apellidoP + ' ' + row.apellidoM,
                foto: row.fotoUrl,
                correo: row.email,
                sexo: row.sexo,
                edad: row.edad,
                telefono: row.telefonoPersona,
                fechaIngreso: row.fechaIngreso
            };
        });
        result(null, rows);
    } catch (error) {
        result(error, null);
    }
};

const getPersona = async (matricula, result) => {
    try {
        const [rows] = await mysqlConnection.query('SELECT * FROM personas WHERE _idPersona = ?', [matricula]);
        if (rows.length > 0) {
            const persona = await {
                matricula: rows[0].matricula,
                nombreCompleto: rows[0].nombre + ' ' + rows[0].apellidoP + ' ' + rows[0].apellidoM,
                foto: rows[0].fotoUrl,
                correo: rows[0].email,
                sexo: rows[0].sexo,
                edad: rows[0].edad,
                telefono: rows[0].telefonoPersona,
                fechaIngreso: rows[0].fechaIngreso
            };
            result(null, rows);
        } else {
            result(null, []);
        }
    }
    catch (error) {
        result(error, null);
    }
};

// Crear un registro en la tabla Persona
const createPersona = async (params, result) => {
    try {
        const { matricula, nombre, apellidoP, apellidoM, sexo, edad, email, fotoUrl, telefono, contrasena, fechaIngreso, fkTipoPersona } = params;
        await getPersona(matricula, (err, persona) => {
            if (persona.length !== 0) {
                result(null, "La persona ya existe");
            } else {
                mysqlConnection.query(`INSERT INTO persona (matricula, nombre, apellidoP, apellidoM, sexo, 
                    edad, email, fotoUrl, telefonoPersona, contrasena, status, fechaIngreso, fkTipoPersona) 
                    Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)`, [matricula, nombre, apellidoP, apellidoM, sexo, edad, email, fotoUrl, telefono, contrasena, fechaIngreso, fkTipoPersona]);
                result(null,  "La persona se ha creado correctamente");
            }
        });
    }
    catch (error) {
        result(error, null);
    }
};
const updatePersona = async (params, matri, result) => {
    try {
        const { nombre, apellidoP, apellidoM, sexo, edad, telefono, contrasena, fechaIngreso } = params;
        await getPersona(matri, (err, persona) => {
            if (persona.length !== 0) {
                 mysqlConnection.query(`UPDATE persona SET nombre = ?, apellidoP = ?, apellidoM = ?, sexo = ?,
                    edad = ?, telefonoPersona = ?, contrasena = ?, fechaIngreso = ? WHERE matricula = ?`, [nombre, apellidoP, apellidoM, sexo, edad, telefono, contrasena, fechaIngreso, matri]);
                result(null, "La persona se ha actualizado correctamente");
            } else {
                result(null, "La persona no existe");
            }
        });
    }
    catch (error) {
        result(error, null);
    }
};


// Eliminar un registro de la tabla Persona
const deletePersona = async (matricula, result) => {
    try {
        await mysqlConnection.query('DELETE FROM persona WHERE matricula = ?', [matricula]);
        result(null, "La persona se ha eliminado correctamente");
    }
    catch (error) {
        result(error, null);
    }

};



module.exports = {
    getpersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona
};

