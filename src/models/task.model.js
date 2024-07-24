const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;