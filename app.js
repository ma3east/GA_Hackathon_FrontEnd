var express = require('express');
var router = express.Router()
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var angularRoutes = require('./config/angularRoutes')
var ejsLocals = require('ejs-locals')



app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(routes);

app.get('/partials/:filename', angularRoutes.partials);
app.use(angularRoutes.index);

app.listen(3000);


module.exports = router;