const { Router } =  require('express');
const router = Router();
const { getStatusCovidController } = require('../controllers/statusCovid.controller');



router.get('/api/covid', getStatusCovidController );



module.exports = router;