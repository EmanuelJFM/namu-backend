const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const horarioController = require('../controllers/horarioController');
const reservaController = require('../controllers/reservaController');

// Definir rutas para usuarios
router.post('/login', userController.UserLogin);
router.post('/create', userController.CreateUser);
// Definiendo rutas para horarios
router.get('/horarios', horarioController.GetHorario);
//Definiendo rutas para reservas
router.post('/reserva', reservaController.CrearReserva);
router.post('/listar', reservaController.ListarReservas);
router.post('/tabla', reservaController.ListarTabla);
router.put('/editar', reservaController.EditarReserva);

module.exports = router;
