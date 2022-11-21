const express=require("express");
require("./db/conn");
const Student=require("./models/students");
const app=express();
const port=process.env.PORT || 8000;

app.use(express.json());

app.get('/',(req,res)=>{
res.send('hello from the other sides');
});
app.post("/students",(req,res) => {
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    });
    res.send("hello from the other sides!");
});
app.listen(port,()=>{
    console.log(`set up at ${port}`);
});