var express = require('express');

var db = require('./models');
var app = express();
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


db.connect('mongodb://localhost:27017/userdata', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')

    })
  }
})


var routes = require('./routes')(app);
