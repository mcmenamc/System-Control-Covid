const { Router } =  require('express');
const router = Router();
const { getStatusCovidController } = require('../controllers/statusCovid.controller');


router.get('/', getStatusCovidController );



module.exports = router;