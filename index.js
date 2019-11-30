var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World! Even if Brady is getting older, he\'ll be the GOAT until someone else wins six.');
});

app.listen(3000, () => {
	console.log('App is up on port 3000');
});
