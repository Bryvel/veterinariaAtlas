var express=require('express');
var api=express.Router();
var organo=require('../models/organo');

api.get('/v1/getOrgano/:slug',async (req,res)=>{
    const slug= req.params.slug;
    const organos= await organo.find({"slug": slug });
    res.json(organos)
})

api.get('/dd',async (req,res)=>{
    
    res.render('prueba')
})
module.exports=api;