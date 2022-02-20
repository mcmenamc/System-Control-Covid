const { loginUser } = require('../models/user.model');


const loginUserController = async (req, res) => {
    const params = req.body;
    loginUser(params, (err, results) => {
        if (err) {
            res.json({
                data: false,
                err
            }).status(500);
        } else {
            res.json({
                data: true,
                results
            }).status(200);
        }
    });
};

module.exports = {
    loginUserController
};