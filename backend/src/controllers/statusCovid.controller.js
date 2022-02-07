const { getStatusCovid,getStatuCovid } = require('../models/statusCovid.model');


const getStatusCovidController = async (req, res) => {
    await getStatusCovid((err, results) => {
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

const getStatuCovidController = async (req, res) => {
    const params = req.params;
    await getStatuCovid(params, (err, results) => {
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
    }
    );
};




module.exports = {
    getStatusCovidController,
    getStatuCovidController
};
