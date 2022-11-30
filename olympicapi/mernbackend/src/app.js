const express=require("express");
require("./db/conn");
const app=express();
const port = process.env.PORT || 3000;
const path=require("path");
const static_path=path.join(__dirname);

app.use(express.static(static_path));
app.set("view engine", "hbs");
// console.log(path.join(__dirname));
app.get('/', async(req,res)=>{
    res.send("hlo from india");
})

app.listen(port, ()=>{
    console.log(`Connect is live at port no. ${port}`);
})