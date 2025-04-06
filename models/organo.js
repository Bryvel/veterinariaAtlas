const mongoose =require('mongoose');
var Schema=mongoose.Schema;

var organoSchema=new Schema({
     nombre: String,
     animal:String,
     slug:String,
     partes:[String]


})

module.exports=mongoose.model('organos',organoSchema);