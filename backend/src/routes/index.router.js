const { Router } =  require('express');
const router = Router();
const { getStatusCovidController, createBackupController } = require('../controllers/statusCovid.controller');




router.get('/api/covid', getStatusCovidController );
router.get('/api/backup', createBackupController );



module.exports = router;