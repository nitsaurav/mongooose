const express=require("express");
require("./db/conn");
const MensRanking=require("./models/mens");
const app=express();
const router=require('./router/men');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.get('/', async(req,res)=>{
    res.send("hlo from india");
})

app.post('/mens',async(req,res)=>{
    try{
        const addingMensRecords=new MensRanking(req.body)
        const insertMens=addingMensRecords.save();
        console.log(req.body);
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get('/getmens',async(req,res)=>{
    try{
        const getMens=await MensRanking.find({})
        res.status(201).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get('/getmen/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findById({_id})
        res.status(201).send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})

app.patch('/updatemen/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatemen=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(updatemen);
    }catch(e){
        res.status(500).send(e);
    }
})

app.delete('/deletemen/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const delmen=await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(delmen);
    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port, ()=>{
    console.log(`Connect is live at port no. ${port}`);
})