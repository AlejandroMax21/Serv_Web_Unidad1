const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  descripcion: { type: String },
  materia: { type: String },
  fecha: { type: Date, default: Date.now },
  completada: { type: Boolean, default: false },
  pendiente: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Tarea", tareaSchema);
