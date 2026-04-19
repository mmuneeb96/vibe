const express = require("express");
const app = express();
const db = require("./config/database");
const User = require("./models/user");
const port = 3000;

db()
  .then(() => {
    console.log("Database connection established");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstname: "ggggg",
      lastName: "hhhh",
      email: "muneeb@example.com",
      password: "password123",
      age: 25,
      gender: "Male",
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
