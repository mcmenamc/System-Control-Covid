const { Schema, model } = require('mongoose');

const divisionScehema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
}, {
    versionKey: false,
    timestamps: true
});
module.exports = model('Division', divisionScehema);
