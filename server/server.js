var express = require('express');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./models');
// require('../controllers/passport.js')(passport);

var app = express();
app.use('/public', express.static(__dirname + '/public'));
// app.use(require('./controllers/passport.js')(passport));
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}));

app.use(bodyParser.json());

app.use(cookieParser());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');

db.connect('mongodb://localhost:27017/userdata', function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(5000, function () {
      console.log('Listening on port 5000...')

    })
  }
})


var routes = require('./routes')(app);