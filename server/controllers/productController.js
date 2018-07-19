var mongoose = require('mongoose');
var db = require('../models/Userdata');//注意載入順序
var passport = require('passport');

var Productdata = mongoose.model('Product')
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

let productController = {
  index: function (req, res) {
    Product.find()
      .then(function (tasks) {
        res.render('index', {"title": tasks,message: ''});
      });
  },
  indexApi: function (req, res) {
    Product.find()
      .then(function (tasks) {
        res.json(tasks);
      });
  }
};
module.exports = productController;