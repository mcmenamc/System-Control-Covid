const {Router} = require('express')
const router = Router()
const {createBackupController} = require('../controllers/backupdb.controller')


router.get('/', createBackupController)

module.exports = router