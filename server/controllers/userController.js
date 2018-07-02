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
};
module.exports = userController;