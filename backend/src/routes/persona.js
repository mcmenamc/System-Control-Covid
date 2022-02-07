const {Router} = require('express');
const {getPersonasController,getPersonaController, createPersonaController,updatePersonaController, deletePersonaController } = require('../controllers/persona.controller');
const router = Router();

router.get('/', getPersonasController );
router.get('/:matricula', getPersonaController );
router.post('/', createPersonaController );
router.patch('/:matricula',updatePersonaController );
router.delete('/:matricula', deletePersonaController );

module.exports = router;