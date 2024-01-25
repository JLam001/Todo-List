const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoController = require("./controller/todoController");
require("dotenv").config();

// Executing express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database..."))
  .catch((err) => console.error("Connection error:", err));

// Port number
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// API Routes
app.use(todoController);
