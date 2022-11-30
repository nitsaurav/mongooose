const mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost:27017/students-api",{
// useCreateIndex:true,
// useNewUrlParser:true,
// useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection is successful");
// }).catch((e)=>{
//     console.log("connection failed");
// });
mongoose.connect("mongodb://localhost:27017/students-api",{ 
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>console.log("connection successfully...")).catch((err)=>console.log(err));