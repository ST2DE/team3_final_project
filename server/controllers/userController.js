var mongoose = require('mongoose');
var db = require('../models/Userdata');//注意載入順序
var passport = require('passport');

var Userdata = mongoose.model('Userdata')
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

let userController = {
  index: function (req, res) {
    Userdata.findAll()
      .then(function (tasks) {
        res.render('index', {"title": tasks});
      });
  },
  indexApi: function (req, res) {
    Userdata.find()
      .then(function (tasks) {
        res.json(tasks);
      });
  }, 
  register: function (req, res) {
   const user= new Userdata({
      
      username: req.body.username ,
      password: req.body.password,
      phone:req.body.phone ,
      email:'666666'

    })
    user.save(err => {  
      if (err) return res.status(500).send(err);
      return res.status(200).send('some text');
    });
  },signup: function(req, res) {
    require('../controllers/passport.js')(passport);
    res.render('index', { message: '',"title": 'tasks'});
  }
};
module.exports = userController;