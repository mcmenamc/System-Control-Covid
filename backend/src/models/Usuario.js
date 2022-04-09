const { Schema, model } = require('mongoose');
const bycript = require('bcryptjs');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellidop: {
        type: String,
        required: true,
        trim: true,
    },
    apellidom: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        ref: 'Rol',
        type: Schema.Types.ObjectId
    },
    status: {
        type: Boolean,
        default: true
    },
    fechaNac: {
        type: Date
    },
    sexo: {
        type: String
    },
    tels: [
        {
            tel: {
                type: String,
                trim: true
            },
            lada: {
                type: String,
                trim: true
            }
        }
    ]
}, {
    timestamps: true,
    versionKey: false
});

usuarioSchema.statics.encryptPassword = async function (password) {
    const salt = await bycript.genSalt(10);
    return await bycript.hash(password, salt);
};

usuarioSchema.statics.comparePassword = async function (password, receivedpassword) {
    return await bycript.compare(password, receivedpassword);
};


module.exports = model('Usuario', usuarioSchema);