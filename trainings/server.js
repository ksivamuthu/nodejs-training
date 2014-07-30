var express = require('express'),
	trainings = require('./trainings.js'),
	bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/trainings', trainings.findAll);
app.get('/trainings/:id', trainings.findById);
app.post('/trainings', trainings.addtraining);

app.listen(3000);
console.log('Listening on port 3000...');