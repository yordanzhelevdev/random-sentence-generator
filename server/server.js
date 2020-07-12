var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port);
bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
console.log('todo list RESTful API server started on: ' + port);



console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./route/approutes.js'); //importing route
routes(app); //register the route
