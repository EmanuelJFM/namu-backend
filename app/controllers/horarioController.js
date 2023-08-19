const Horario = require('../models/horarioModel')

const horarioController = {
    GetHorario: async (req, res) => {
        try {
          const { Dia } = req.query; // Obtén el parámetro day de la consulta
    
          if (!Dia) {
            return res.status(400).json({ message: 'El parámetro "Dia" es requerido' });
          }
    
          // Buscar el horario según el día proporcionado
          const horario = await Horario.find({ Dia},'Horas');
    
          if (!horario || horario.length === 0) {
            return res.status(404).json({ message: 'Horario no encontrado para el día especificado' });
          }
          res.json(horario);
        } catch (error) {
          console.error('Error en la consulta a la base de datos:', error.message);
          res.status(500).json({ message: 'Error con el servidor' });
        }
      }
};

module.exports = horarioController;

  