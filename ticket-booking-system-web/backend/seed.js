// Seed data script placeholder
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Bus = require("./models/Bus");

dotenv.config();

connectDB();

const seedBuses = async () => {
  try {
    await Bus.deleteMany();
    await Bus.insertMany([
      { name: "Express 101", source: "Delhi", destination: "Jaipur", seats: 40 },
      { name: "Night Rider", source: "Mumbai", destination: "Pune", seats: 30 },
      { name: "Royal AC", source: "Bangalore", destination: "Chennai", seats: 50 }
    ]);
    console.log("✅ Sample buses added");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedBuses();
