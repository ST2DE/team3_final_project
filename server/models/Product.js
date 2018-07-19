
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ProductSchema = new Schema(
  { 
    productname:   { type: String,unique: true,required:true},
    quantity:   { type: number,unique: true,required:true},
    owner:     { type: String },
    mfd:     { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  },{
    versionKey: false
  }
)
var Product=mongoose.model('Product', ProductSchema,'Product' );
module.exports = Product;
