const { Router } = require('express');
const router = Router();

const semaforoCovidCtrl = require('../controllers/semaforoCovid.controller');

router.get('/', semaforoCovidCtrl.getSemaforos);

router.get('/:', semaforoCovidCtrl.getSemaforoById);

router.post('/', semaforoCovidCtrl.createSemaforo);

router.put('/:id', semaforoCovidCtrl.updateSemaforoById);

router.delete('/:id', semaforoCovidCtrl.deleteSemaforoById);

module.exports = router;