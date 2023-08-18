const User = require('../models/userModel'); // Importa el modelo de usuario si estás utilizando Mongoose

const userController = {
    UserLogin: async (req, res) => {
      try {
        const usuarios = await User.find();
        if (!usuarios || usuarios.length === 0) {
          console.log("No se encontraron usuarios en la base de datos");
          return res.status(404).json({ message: "No se encontraron usuarios" });
        }
        console.log("Usuarios encontrados:", usuarios);
        res.json(usuarios);
      } catch (error) {
        console.error("Error en la consulta a la base de datos:", error.message);
        res.status(500).json({ message: "Error con el servidor" });
      }
    },
  };
  
module.exports = userController;
