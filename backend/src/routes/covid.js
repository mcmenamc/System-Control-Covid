const { Router } =  require('express');
const router = Router();
const { getStatusCovidController, getStatuCovidController } = require('../controllers/statusCovid.controller');


router.get('/', getStatusCovidController ); // Obtener  todos los datos de la tabla statusCovid
router.get('/:_idPersona', getStatuCovidController); //Obtner un dato de la tabla statusCovid
router.post('/'); // Crear un dato de la tabla statusCovid
router.patch('/:matricula'); // Actualizar un dato de la tabla statusCovid
router.delete('/:matricula'); // Eliminar un dato de la tabla statusCovid

// router.get('/backup', createBackupController );

module.exports = router;