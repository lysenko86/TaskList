const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    date: Date,
    priority: Number,
    text: String
});
const TaskModel = mongoose.model('task', TaskSchema);

module.exports.getAll = (cb) => {
    TaskModel.find({}).then(cb);
};

module.exports.getById = (id, cb) => {
    TaskModel.findOne({ _id: id }).then(cb);
};

module.exports.create = (task, cb) => {
    TaskModel.create(task).then(cb);
};

module.exports.update = (id, newData, cb) => {
    TaskModel.findByIdAndUpdate({ _id: id }, newData)
        .then(() => Task.findOne({ _id: id })).then(cb);   /// ???
};

module.exports.delete = (id, cb) => {
    TaskModel.deleteOne({_id: id}).then(cb);
};
