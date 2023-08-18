// app/middleware/corsMiddleware.js
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;

