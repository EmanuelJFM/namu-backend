const express = require("express");
const initDb = require('./app/config/db');
const corsMiddleware = require('./app/middleware/corsMiddleware');
const app = express();
const routes = require('./app/routes/api/index');
const port = 3000;

// Configuraciones 
app.use(corsMiddleware);
// Rutas
app.use('/api', routes);
// Llamado al servidor
app.listen(port, () => {
    console.log('App ejecutándose en el puerto ' + port);
});
initDb();
