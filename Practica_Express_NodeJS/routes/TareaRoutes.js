const express = require("express");
const Tarea = require("../models/Tarea");
const router = express.Router();

// POST
router.post("/", async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);
    res.status(201).json(tarea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all
router.get("/", async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const tarea = await Tarea.findOne({ id: req.params.id });
    if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT(id)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Tarea.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE(id)
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Tarea.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json({ message: "Tarea eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 1. Total de tareas
router.get("/stats/total", async (req, res) => {
  try {
    const total = await Tarea.countDocuments();
    res.json({ totalTareas: total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Tarea más reciente
router.get("/stats/reciente", async (req, res) => {
  try {
    const reciente = await Tarea.findOne().sort({ fecha: -1 });
    res.json(reciente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Tarea más antigua
router.get("/stats/antigua", async (req, res) => {
  try {
    const antigua = await Tarea.findOne().sort({ fecha: 1 });
    res.json(antigua);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Cantidad de tareas completadas y pendientes
router.get("/stats/estado", async (req, res) => {
  try {
    const completadas = await Tarea.countDocuments({ completada: true });
    const pendientes = await Tarea.countDocuments({ pendiente: true });
    res.json({ completadas, pendientes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
