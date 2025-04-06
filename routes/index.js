var express=require('express');
var router=express.Router();
var hueso=require('../models/hueso');

router.get('/huesos/Generalidades',async (req,res)=>{
    var nombre=req.params.nombre;
    var huesos= await hueso.find({ "nombre": "Generalidades"});
    console.log(huesos)
    res.render('containerg',{
        huesos
    })
})

 router.get('/huesos/:nombre',async (req,res)=>{
     var nombre=req.params.nombre;
     var huesos= await hueso.find({ "nombre": nombre});
     console.log(huesos)
     res.render('containerHuesos',{
         huesos
     })
 })
 


 router.get('/',async (req,res)=>{
    
    res.render('index')
})

router.get('/huesos',async (req,res)=>{
    
    res.render('huesos')
})

router.get('/organos',async (req,res)=>{
    
    res.render('organos')
})

router.get('/organos/container',async (req,res)=>{
    
    res.render('containerOrganos')
})

router.get('/3D',async (req,res)=>{
    
    res.render('3DContainer')
})

module.exports=router;