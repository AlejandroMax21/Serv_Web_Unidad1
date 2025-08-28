const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const tareaRoutes = require("./routes/TareaRoutes")

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/tareas", tareaRoutes);

// Conexión MongoDB y arranque servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
