var express=require('express');
var router=express.Router();
var hueso=require('../models/hueso');

router.get('/Generalidades',async (req,res)=>{
    var nombre=req.params.nombre;
    var huesos= await hueso.find({ "nombre": "Generalidades"});
    console.log(huesos)
    res.render('containerg',{
        huesos
    })
})

 router.get('/:nombre',async (req,res)=>{
     var nombre=req.params.nombre;
     var huesos= await hueso.find({ "nombre": nombre});
     console.log(huesos)
     res.render('container',{
         huesos
     })
 })


 router.get('/',async (req,res)=>{
    
    res.render('home')
})
module.exports=router;