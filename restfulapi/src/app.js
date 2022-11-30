const express=require("express");
require("./db/conn");
const Student=require("./models/students");
const studentRouter=require("./router/student");
const app=express();
const port=process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);

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

app.post("/savestudents",async(req,res) => {
    console.log(req.body);
    try{
        const user=new Student(req.body);
        const createUser=user.save();
        res.status(201).send(createUser);
    }catch(e){ res.status(400).send(e); }
    res.send("hello2 from the other sides!");
});

// get all students data
app.get("/students",async(req,res) => {
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }catch(e){ res.send(e); }
});

// get individual student data 
app.get("/student/:id",async(req,res) => {
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        if(!studentData){
            return res.status(400).send();
        }else{
            res.send(studentData);
        }
    }catch(e){ res.status(500).send(e); }
});

// update student data by id
app.patch("/student/:id",async(req,res) => {
    try{
        const _id=req.params.id;
        const updatestudentData=await Student.findByIdAndUpdate(_id,req.body,{ new: true,useFindAndModify:false });
        if(!updatestudentData){
            return res.status(400).send();
        }else{
            res.send(updatestudentData);
        }
    }catch(e){ res.status(500).send(e); }
});

// delete student data by id
app.delete("/student/:id",async(req,res) => {
    try{
        const _id=req.params.id;
        const deleteStudentdata=await Student.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send();
        }else{
            res.send(deleteStudentdata);
        }
    }catch(e){ res.status(500).send(e); }
});

// create a new router
const router=new express.Router();

// we need to defind the router
router.get("/student_list",(requ,res) => {
    res.send("Hlo gus");
});

// we need to register our route
app.use(router);

app.listen(port,()=>{
    console.log(`set up at ${port}`);
});