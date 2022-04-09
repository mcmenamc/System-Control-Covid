const { Schema, model } = require('mongoose');

const semaforoCovidSchema = new Schema({
    temperatura: {
        type: Number,
        required: true
    },
    sintomas: [{
        type: String,
        required: true
    }],
    persona: {
        type: String,
        // ref: 'Persona',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = model('SemaforoCovid', semaforoCovidSchema);       