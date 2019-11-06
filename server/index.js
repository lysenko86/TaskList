const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/taskmanager-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./router'));

app.listen(3003, () => {
    console.log('Server was started...');
});
