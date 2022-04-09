const {Schema, model} = require('mongoose');

const areaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    division:{
        type: Schema.Types.ObjectId,
        ref: 'Division',
    },
    grado:{
        type: String,
        required: true,
        trim: true,
    }
},{
    versionKey: false,
    timestamps: true
});

module.exports = model('Area', areaSchema);