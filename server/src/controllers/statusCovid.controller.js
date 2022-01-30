const { getStatusCovid } = require('../models/statusCovid.model');


const getStatusCovidController = (req, res) => {
    getStatusCovid((err, results) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                results
            }).status(200);
        }
    });
};



module.exports = {
    getStatusCovidController
};
