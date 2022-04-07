var express=require('express');
var migration=express.Router();


migration.get('/home',async (req,res)=>{
    
    res.render('newHome')
})
module.exports=migration;

migration.get('/info',async (req,res)=>{
    
    res.render('info')
})
module.exports=migration;