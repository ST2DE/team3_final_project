var mongoose = require('mongoose');
var db = require('../models/Productdata');//注意載入順序
var Productdata = mongoose.model('Productdata')
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

let productController = {
  index: function (req, res) {
    Productdata.find()
      .then(function (tasks) {
        res.json(tasks);
      });
  },
  indexApi: function (req, res) {
    Productdata.find()
      .then(function (tasks) {
        res.json(tasks);
      });
  },
  addProduct: function (req, res) {
    const product= new Productdata({
       
      productname: req.body.productname ,
      quantity: req.body.quantity,
      picture:req.body.picture ,
      owner:req.body.owner
 
     })
     product.save(err => {  
       if (err) return res.status(500).send(err);
       return res.status(200).json({message:'OK'});
     });
   }
};
module.exports = productController;