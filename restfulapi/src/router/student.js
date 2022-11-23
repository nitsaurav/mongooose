const express=require("express");
const router=new express.Router();
const Student=require("../models/students");

router.get("/student_list",(requ,res) => {
    res.send("Hlo gus");
});


module.exports=router;