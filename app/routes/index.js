const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const horarioController = require('../controllers/horarioController');

// Definir rutas para usuarios
router.post('/login', userController.UserLogin);
router.post('/create', userController.CreateUser);
// Definiendo rutas para horarios
router.get('/horarios', horarioController.GetHorario);


module.exports = router;
