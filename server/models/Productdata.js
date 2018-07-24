
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ProductSchema = new Schema(
  { 
    productname:   { type: String,unique: true,required:true},
    quantity:   { type: Number},
    picture:   { type: String},
    owner:     { type: String, required:true},
    mfd:     { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  },{
    versionKey: false
  }
)
var Productdata=mongoose.model('Productdata', ProductSchema,'Productdata' );
module.exports = Productdata;
