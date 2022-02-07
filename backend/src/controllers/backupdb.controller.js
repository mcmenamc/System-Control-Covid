const { createdBackup } = require('../models/backupdb.models');
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
    createBackupController
};
