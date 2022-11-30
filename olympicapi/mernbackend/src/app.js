const express=require("express");
const app=express();
const port = process.env.PORT || 3000;

app.get('/', async(req,res)=>{
    res.send("hlo from india");
})

app.listen(port, ()=>{
    console.log(`Connect is live at port no. ${port}`);
})