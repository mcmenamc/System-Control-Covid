const mysqlConnection = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async (data, result) => {
    try {
        const { email, contrasena } = data;
        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(contrasena, salt, function(err, hash) {
        //         console.log(hash);
        //     });
        // });
        const [rows] = await mysqlConnection.query('SELECT matricula, contrasena FROM estudiantes WHERE email = ?', [email]);
        if (rows.length > 0) {
            bcrypt.compare(contrasena, rows[0].contrasena, (err, res) => {
                if (res) {
                    const token = jwt.sign({
                        matricula: rows[0].matricula,
                    }, process.env.TOKEN_SECRET)
                    result(null, {
                        matricula: rows[0].matricula,
                        token
                    })
                } else {
                    result(null, "La contraseña es incorrecta");
                }
            });
        } else {
            result(null, []);
        }
    } catch (error) {
        console.log(error);
        result(error, null);
    }
};


module.exports = {
    loginUser
}