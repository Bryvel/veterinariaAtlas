var express=require('express');
var migration=express.Router();


migration.get('/home',async (req,res)=>{
    
    res.render('newHome')
})

migration.get('/info',async (req,res)=>{
    
    res.render('info')
})
module.exports=migration;