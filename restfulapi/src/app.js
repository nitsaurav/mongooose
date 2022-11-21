const express=require("express");
require("./db/conn");
const app=express();
const port=process.env.PORT || 8000;

app.get('/',(req,res)=>{
res.send('hello from the other sides');
});
app.post("/students",(req,res) => {
    res.send("hello from the other sides!");
});
app.listen(port,()=>{
    console.log(`set up at ${port}`);
});