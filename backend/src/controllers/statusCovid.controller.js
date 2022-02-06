const { getStatusCovid } = require('../models/statusCovid.model');
const { createdBackup } = require('../models/backupdb.models');


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
const createBackupController = async (req, res) => {
    await createdBackup((err, results) => {
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
    getStatusCovidController,
    createBackupController
};
