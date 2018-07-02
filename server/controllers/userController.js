var mongoose = require('mongoose');
var db = require('../models/Userdata');

var Userdata = mongoose.model('Userdata')

let userController = {
  index: function (req, res) {
    Userdata.find()
      .then(function (tasks) {
        res.render('index', {"title": tasks});
      });
  },
  indexApi: function (req, res) {
    Userdata.findAll()
      .then(function (tasks) {
        res.json(tasks);
      });
  }, 
  register: function (req, res) {
   const user= new Userdata({
      
      username: req.body.name ,
      phone:req.body.phone ,
      email:'666666'

    })
    user.save(err => {  
      if (err) return res.status(500).send(err);
      return res.status(200).send('some text');
    });
  },
};
module.exports = userController;