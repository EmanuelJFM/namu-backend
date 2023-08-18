const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController'); // Importa el controlador de usuarios

// Definir rutas para usuarios
router.post('/', userController.UserLogin);


module.exports = router;
