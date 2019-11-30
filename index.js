var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.send('Hello World! Even if Brady is getting older, he\'ll be the GOAT until someone else wins six.');
});

app.listen(port, () => {
	console.log('App is up on port 3000');
});
