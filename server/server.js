var express = require('express');

// var db = require('./models');
var app = express();
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.listen(3000, function() {
});

var routes = require('./routes')(app);
