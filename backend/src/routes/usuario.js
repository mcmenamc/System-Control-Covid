const express = require('express');
const router = express.Router();
const {verifyToken,} = require('../middlewares/authJwt');

const {updateUsuarioById } = require('../controllers/usuario.Controller');

router.put('/:usuarioId',[verifyToken], updateUsuarioById);


module.exports = router;