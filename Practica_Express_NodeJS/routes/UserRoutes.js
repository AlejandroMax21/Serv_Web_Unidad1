const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET BY NAME
router.get("/:name", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//PUT
router.put("/:name", async (req, res) => {
  try {
    const { email, age } = req.body;
    const updated = await User.findOneAndUpdate(
      { name: req.params.name },
      { email, age },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:name", async (req, res) => {
  try {
    const deleted = await User.findOneAndDelete({ name: req.params.name });
    if (!deleted) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
