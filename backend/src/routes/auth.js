// const Joi = require('@hapi/joi');
const {Router} = require('express');
const router = Router();
const {loginUserController} = require('../controllers/user.controller');

router.post('/', loginUserController);



module.exports = router;