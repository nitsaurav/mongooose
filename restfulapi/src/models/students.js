const mongoose=require("mongoose");
const validator=require("validator");


const studentSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [2,"minimum 2letters"],
        maxlength: 30
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email ID already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const Student = new mongoose.model("Student",studentSchema);
module.exports=Student;