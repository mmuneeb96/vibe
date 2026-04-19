const mongoose = require("mongoose");
require("dotenv").config();
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = db;
