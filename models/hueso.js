const mongoose =require('mongoose');
var Schema=mongoose.Schema;

var huesoSchema=new Schema({
     nombre: String,
     animal:String,
     partes:[String]


})

module.exports=mongoose.model('huesos',huesoSchema);