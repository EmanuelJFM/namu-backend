const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    dni: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    user: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema);
