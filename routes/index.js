var express=require('express');
var router=express.Router();
var hueso=require('../models/hueso');
const fs = require('fs');

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
router.get('/pdfMiologia',async (req,res)=>{
    
    res.render('containerPdfAtlasMiologia')
})
router.get('/pdfOsteologia',async (req,res)=>{
    
    res.render('containerPdfAtlasOsteologia')
})

router.get('/AtlasOsteologia', (req, res) => {
    const path = './Public/ico/Atlas osteologia.pdf'
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
})
router.get('/AtlasMiologia', (req, res) => {
    const path = './Public/ico/Atlas miologia.pdf'
    if (fs.existsSync(path)) {
        res.contentType("application/pdf");
        fs.createReadStream(path).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
})

module.exports=router;