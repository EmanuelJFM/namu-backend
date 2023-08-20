const Reserva = require('../models/reservaModel');

const reservaController = {
    CrearReserva: async (req, res) => {
        try {
          const { nombre, phone, email, fecha, horario, cantidad, coment } = req.body;
    
          // Crear una nueva reserva con status por defecto en 'Pendiente'
          const nuevaReserva = new Reserva({
            nombre,
            phone,
            email,
            fecha,
            horario,
            cantidad,
            coment,
            status: 'Pendiente' // Establecer status por defecto
          });
    
          // Guardar la nueva reserva en la base de datos
          await nuevaReserva.save();
    
          res.status(201).json({ message: 'Reserva creada exitosamente' });
        } catch (error) {
          console.error('Error al crear la reserva:', error.message);
          res.status(500).json({ message: 'Error con el servidor' });
        }
      },
    ListarReservas: async (req, res) => {
        try {
            const reservas = await Reserva.find({}, 'nombre email fecha horario cantidad status coment');
            res.json(reservas);
        } catch (error) {
            res.status(500).json({ message: 'Error con el servidor' });
        }
    },
    ListarTabla: async (req, res) => {
        try {
            const reservas = await Reserva.find({}, 'id nombre email fecha horario cantidad status');
            res.json(reservas);
        } catch (error) {
            res.status(500).json({ message: 'Error con el servidor' });
        }
    },
    EditarReserva: async (req, res) => {
        try {
          const { id } = req.params; // Capturamos el ID de la reserva a editar
          const { fecha, horario, cantidad, coment } = req.body; // Capturamos los nuevos valores
    
          // Buscamos la reserva por su ID
          const reservaExistente = await Reserva.findById(id);
    
          if (!reservaExistente) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
          }
    
          // Actualizamos los campos si se proporcionaron nuevos valores
          if (fecha) reservaExistente.fecha = fecha;
          if (horario) reservaExistente.horario = horario;
          if (cantidad) reservaExistente.cantidad = cantidad;
          if (coment) reservaExistente.coment = coment;
    
          // Guardamos la reserva actualizada
          const reservaActualizada = await reservaExistente.save();
          res.json(reservaActualizada);
        } catch (error) {
          res.status(500).json({ message: 'Error con el servidor' });
        }
      }
};

module.exports = reservaController;