
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var UserdataSchema = new Schema(
  {
    name:      { type: String },
    phone:     { type: String, unique: true },
    email:     { type: String, unique: true },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  },{
    collection: 'Userdata'
  }
)
var Userdata=mongoose.model('Userdata', UserdataSchema,'Userdata' );
module.exports = Userdata;
