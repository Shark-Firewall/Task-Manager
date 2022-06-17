const express = require("express");
const Tasks = require("./routers/tasks");
const app = express();

// configuring the .env file
require("dotenv").config();

// Database connection
const connectDB = require("./db/connect");

app.use(express.json());

// Routers
app.use("/task", Tasks);

app.get("/home", (req, res) => {
  res.send("Task Manager App");
});

const start = async () => {
  try {
    await connectDB(process.env.db_link);
    app.listen(process.env.PORT, () => {
      console.log("server started at port number " + process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
