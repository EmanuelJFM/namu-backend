const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('debug', true)

const userSchema = new Schema({
    name: {
        type: String,
        index: true
    },
    dni: {
        type: String,
        index: true
    },
    phone: {
        type: String,
        index: true
    },
    email: {
        type: String,
        index: true
    },
    user: {
        type: String,
        index: true
    },
    password: {
        type: String,
        index: true
    }
});

module.exports = mongoose.model('users', userSchema);
