const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importa el controlador de usuarios

// Definir rutas para usuarios
router.post('/login', userController.UserLogin);
router.post('/create', userController.CreateUser);


module.exports = router;
