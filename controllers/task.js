const TaskModel = require('../models/task');

module.exports.getAll = (req, res) => {
    TaskModel.getAll(tasks => res.send(tasks));
};

module.exports.getById = (req, res) => {
    TaskModel.getById(req.params.id, task => res.send(task));
};

module.exports.create = (req, res) => {
    TaskModel.create(req.body, task => res.send(task));
};

module.exports.update = (req, res) => {
    TaskModel.update(req.params.id, req.body, task => res.send(task));
};

module.exports.delete = (req, res) => {
    TaskModel.delete(req.params.id, task => res.send(task));
};
