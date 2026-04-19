const mongoose = require("mongoose");
const db = async () => {
  try {
    await mongoose.connect(
      "mongodb://muneeb:muneeb@ac-vw10nzt-shard-00-00.v2o8xad.mongodb.net:27017,ac-vw10nzt-shard-00-01.v2o8xad.mongodb.net:27017,ac-vw10nzt-shard-00-02.v2o8xad.mongodb.net:27017/?ssl=true&replicaSet=atlas-ahnibj-shard-0&authSource=admin&appName=muneeb/vibe",
    );
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = db;
