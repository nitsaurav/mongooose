const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/olymics",{ 
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>console.log("connection successfully...")).catch((err)=>console.log(err));