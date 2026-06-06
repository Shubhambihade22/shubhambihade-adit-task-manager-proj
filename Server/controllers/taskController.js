const Task = require("../models/Task");

const getTasks = async (req, res) => {
  const tasks = await Task.find({
    userId: req.user.userId,
  });

  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    userId: req.user.userId,
  });

  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    userId: req.user.userId,
  });

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;

  // Optional status update
  if (req.body.status) {
    task.status = req.body.status;
  }

  await task.save();

  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task deleted",
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
