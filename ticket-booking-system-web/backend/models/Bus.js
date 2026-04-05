// Bus model placeholder
const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  seats: { type: Number, required: true },
});

module.exports = mongoose.model("Bus", busSchema);
