const User = require('../models/userModel'); // Importa el modelo de usuario si estás utilizando Mongoose

const userController = {
  UserLogin: async (req, res) => {
    try {
      const { user, password } = req.query; // Obtén los parámetros user y password de la consulta
      
      if (!user || !password) {
        return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
      }

      const usuario = await User.findOne({ user, password });

      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.json(usuario);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).json({ message: 'Error con el servidor' });
    }
  },
};

module.exports = userController;

