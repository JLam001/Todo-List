const mongoose = require("mongoose");

// Create Schema
const TodoSchema = new mongoose.Schema({
  task: String,
});

// Export mongoose model
module.exports = mongoose.model("Todo", TodoSchema);
