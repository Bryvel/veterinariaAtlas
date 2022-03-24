var express=require('express');
var migration=express.Router();


migration.get('/home',async (req,res)=>{
    
    res.render('newHome')
})
module.exports=migration;