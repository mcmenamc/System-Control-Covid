const {Schema, model} = require('mongoose');

const rolSchema = new Schema({
    nombre: String,
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Rol', rolSchema);