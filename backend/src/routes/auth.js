// const Joi = require('@hapi/joi');
const {Router} = require('express');
const router = Router();

const authController = require('../controllers/auth.controller');

router.post('/sigup', authController.singUp);
router.post('/signin', authController.signin);



module.exports = router;