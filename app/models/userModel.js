const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    dni: String,
    phone: String,
    email: String,
    user: String,
    password: String
});

module.exports = mongoose.model('user', userSchema);
