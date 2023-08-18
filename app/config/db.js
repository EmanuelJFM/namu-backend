const mongoose = require('mongoose');
const DB_URI = 'mongodb://127.0.0.1:27017/Namu';

const initDb = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((x) => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error en la conexión a la base de datos:', err));
};

module.exports = initDb;



