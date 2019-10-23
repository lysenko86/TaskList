const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    date: Date,
    priority: Number,
    text: String
});

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;
