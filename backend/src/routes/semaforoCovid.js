const { Router } = require('express');
const router = Router();

const {verifyToken, verifyAdmin, verifyUser} = require('../middlewares/authJwt');

const semaforoCovidCtrl = require('../controllers/semaforoCovid.controller');


router.get('/', semaforoCovidCtrl.getSemaforos);


router.get('/:semaforoCovidId', semaforoCovidCtrl.getSemaforoById);


router.post('/', [verifyToken,verifyUser], semaforoCovidCtrl.createSemaforo);


router.put('/:semaforoCovidId', [verifyToken, verifyAdmin], semaforoCovidCtrl.updateSemaforoById);


router.delete('/:semaforoCovidId', [verifyToken, verifyAdmin], semaforoCovidCtrl.deleteSemaforoById);



module.exports = router;