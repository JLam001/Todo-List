// todoController.js
const express = require("express");
const Todo = require("../models/Todo");

const todoController = express.Router();

// GET Request Controller
todoController.get("/todo", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST Request Controller
todoController.post("/todo/new", async (req, res) => {
  const newTask = await Todo.create(req.body);
  res.status(201).json({ newTask });
});

// DELETE Request Controller
todoController.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

module.exports = todoController;
