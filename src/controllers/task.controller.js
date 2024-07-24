const Task = require('../models/task.model');

const createTask = async (req, res) => {
    const task = new Task({ ...req.body, userId: req.user._id });
    await task.save();
    res.status(201).json(task);
};

const getTasks = async (req, res) => {
    const tasks = await Task.find({ userId: req.user._id });
    res.status(200).json(tasks);
};

const getTask = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
};

const updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.taskId, userId: req.user._id },
        req.body,
        { new: true }
    );
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
};

const deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.taskId, userId: req.user._id });
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
};