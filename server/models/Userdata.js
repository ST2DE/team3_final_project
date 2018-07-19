
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserdataSchema = new Schema(
  { 
    username:   { type: String,unique: true,required:true},
    password:   { type: String,unique: true,required:true},
    phone:     { type: String },
    email:     { type: String},
    myproduct:     { type: String},
    favorite:     { type: String},
    shoppingCart:     { type: String},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  },{
    versionKey: false
  }
)
var Userdata=mongoose.model('Userdata', UserdataSchema,'Userdata' );
module.exports = Userdata;
