const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorarioSchema = new Schema({

    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: [String],
        required: true,
        default: []
    }
}
);
module.exports = mongoose.model('horarios', HorarioSchema);
