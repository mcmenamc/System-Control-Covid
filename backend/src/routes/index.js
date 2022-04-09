const {Router} = require('express')
const router = Router()
const fs = require('fs')

// No mover esta estructura del codigo, ya que funcionamiento del router
const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}
fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log('CARGAR RUTA ---->', fileWithOutExt)
    }
})

module.exports = router