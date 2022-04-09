const { Schema, model } = require('mongoose');

const alumnoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    foto: {
        type: String,
        required: true,
        trim: true
    },
    area: {
        type: Schema.Types.ObjectId,
        ref: 'Area',
        required: true,
    },
    cuatri: {
        type: Number
    }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Alumno', alumnoSchema);