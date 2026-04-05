// Bus routes placeholder
const express = require("express");
const Bus = require("../models/Bus");

const router = express.Router();

// Get all buses
router.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch {
    res.status(500).json({ error: "❌ Could not fetch buses" });
  }
});

module.exports = router;
