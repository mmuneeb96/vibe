const express = require("express");
const app = express();
const db = require("./config/database");
const user = require("./models/user");
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});
