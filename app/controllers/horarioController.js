const Horario = require('../models/horarioModel')

const horarioController = {
    PostHorario: async (req, res) => {
        try {
          const {fecha}  = req.body; // Obtén el parámetro day de la consulta
          if (!fecha) {
            return res.status(400).json({ message: 'El parámetro fecha es requerido' });
          }
          // Buscar el horario según el día proporcionado
          const horario = await Horario.findOne({fecha}, 'hora');

          if (!horario) {
            return res.status(400).json({ message: 'Horario no encontrado para el día especificado'});
          }
          res.json(horario);
        } catch (error) {
          console.error('Error en la consulta a la base de datos:', error.message);
          res.status(500).json({ message: 'Error con el servidor' });
        }
      }
};

module.exports = horarioController;

  