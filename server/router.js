const express = require('express');

const router = express.Router();
const Task = require('./schemes/task-schema');

router.get('/tasks', (req, res) => {
    Task.find({}).then(task => res.send(task));
});

router.post('/tasks', (req, res) => {
    Task.create(req.body).then(task => res.send(task));
});

router.put('/tasks/:id', (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => Task.findOne({ _id: req.params.id })
            .then(task => res.send(task))
        );
});

router.delete('/tasks/:id', (req, res) => {
    Task.deleteOne({_id: req.params.id}).then(task => res.send(task));
});

module.exports = router;
