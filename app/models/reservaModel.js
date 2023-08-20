const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fecha: {
        type: String,
        required: true,
        unique: true
    },
    horario:{
        type: String,
        required: true
    },
    cantidad:{
        type: String,
        required: true,
    },
    coment:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('reservas', ReservaSchema);
