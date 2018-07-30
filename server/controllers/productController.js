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
      owner:req.body.owner,
      mfd:req.body.mfd
     })
     product.save(err => {  
       if (err) return res.status(500).send(err);
       return res.status(200).json({message:'OK'});
     });
   },
   update:function(req,res){
    collection.update(criteria, update[[, options], callback]);
    const id = {
      where: {
        id: req.body.id
      }
    };
    const updateValues = {
      name: req.body.name,
      context: req.body.context
    };
    Blog.findOne(id)
      .then(data => {
        console.log(updateValues)
        data.update(updateValues).then(finish => {
          res.redirect('/dashboard/article');
        });
      })
      .catch(error => res.status(400).send(error));
   },
   delete(req,res){
    collection.remove(
    )

    const id = {
      where: {
        id: req.query.id
      }
    };
    Blog.findOne(id)
      .then(user => {
        // console.log(todos);
        user.destroy().then(() => {
          res.redirect('/dashboard/article');
        });
      })
      .catch(error => res.status(400).send(error));
   }
};
module.exports = productController;