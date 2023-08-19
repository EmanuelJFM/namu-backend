const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorarioSchema = new Schema({
    Dia: {
        type: String,
        required: true
    },
    Horas: {
        type: Array,
        required: true,
    }
});
module.exports = mongoose.model('horarios', HorarioSchema);
