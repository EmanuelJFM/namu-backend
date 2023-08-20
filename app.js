const express = require('express');
const initDb = require('./app/config/db');
const corsMiddleware = require('./app/middleware/corsMiddleware');
const cors = require('cors');
const app = express();
const routes = require('./app/routes/index');
const port = 3000;

initDb();
// Configuraciones 
app.use(express.json());
app.use(cors());
// app.use(corsMiddleware);
// Rutas
app.use('/api',routes);
// Llamado al servidor
app.listen(port, () => {
    console.log('App ejecutándose en el puerto ' + port);
});

