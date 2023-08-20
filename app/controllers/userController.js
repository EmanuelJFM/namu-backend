const User = require('../models/userModel'); // Importa el modelo de usuario si estás utilizando Mongoose

const userController = {
  UserLogin: async (req, res) => {
    try {
      const { user, password } = req.body; // Obtén los parámetros user y password de la consulta

      // Buscar el usuario por nombre de usuario
      const usuario = await User.findOne({ user });
      if (!usuario || usuario.password !== password) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
      }
      // Devolver solo los campos requeridos
      const userData = {
        name: usuario.name,
        phone: usuario.phone,
        email: usuario.email
      };
      res.json(userData);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).json({ message: 'Error con el servidor' });
    }
  },
  CreateUser: async (req, res) => {
    try {
      const { name, dni, phone, email, user, password } = req.body;

      // Verificar si ya existe un usuario con el mismo dni o email
      const existingUser = await User.findOne({ $or: [{ dni }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }

      // Crear un nuevo usuario
      const newUser = new User({
        name,
        dni,
        phone,
        email,
        user,
        password
      });

      // Guardar el nuevo usuario en la base de datos
      await newUser.save();

      res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el usuario:', error.message);
      res.status(500).json({ message: 'Error con el servidor' });
    }
  },
};


module.exports = userController;


