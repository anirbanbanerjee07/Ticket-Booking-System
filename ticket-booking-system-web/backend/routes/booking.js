// Booking routes placeholder
const express = require("express");
const jwt = require("jsonwebtoken");
const Booking = require("../models/Booking");
const Bus = require("../models/Bus");

const router = express.Router();

// Middleware: Authenticate
const auth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Create booking
router.post("/", auth, async (req, res) => {
  try {
    const { busId, seats } = req.body;
    const booking = new Booking({
      user: req.user.id,
      bus: busId,
      seats,
    });
    await booking.save();
    res.json(booking);
  } catch {
    res.status(500).json({ error: "❌ Booking failed" });
  }
});

// Get my bookings
router.get("/my", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("bus");
    res.json(bookings);
  } catch {
    res.status(500).json({ error: "❌ Could not load bookings" });
  }
});

module.exports = router;
