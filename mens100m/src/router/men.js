const express=require("express");
const router=new express.Router();
const Men=require("../models/mens");

router.get('/', async(req,res)=>{
    res.send("hlo from india");
})

router.post('/mens',async(req,res)=>{
    try{
        const addingMensRecords=new MensRanking(req.body)
        const insertMens=addingMensRecords.save();
        console.log(req.body);
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/getmens',async(req,res)=>{
    try{
        const getMens=await MensRanking.find({})
        res.status(201).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/getmen/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findById({_id})
        res.status(201).send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch('/updatemen/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatemen=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(updatemen);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete('/deletemen/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const delmen=await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(delmen);
    }catch(e){
        res.status(500).send(e);
    }
})


module.exports=router;