const User = require('../models/userModel'); // Importa el modelo de usuario si estás utilizando Mongoose

const userController = {
  UserLogin: async (req, res) => {
      try {
          const { user, password } = req.body;
          
          const login = await User.findOne({ user: user, password: password });
          if (login) {
              res.json(login);
          } else {
              res.status(404).json({ message: 'Usuario no encontrado o credenciales incorrectas' });
          }
      } catch (error) {
          res.status(500).json({ message: 'Error interno del servidor' });
      }
  },
};
module.exports = userController;
