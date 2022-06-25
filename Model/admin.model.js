const mongoose=require("mongoose");
//some proptery lose
const schema=new mongoose.Schema({

    _id:{
        type:mongoose.Types.ObjectId
    },
    fullName:{
        type:String,
        requierd:true
    },
    age:{
        type:Number,
        min:18,
    },
    email:{
        type:String,
        requierd:true,
        unique:true
       // match:{}
    },
    password:{
        type:String,
        requierd:true,
    },
    phone:{type:String},
    national_id:{
        type:Number,
        unique:true,
        requierd:true
    },
    image:{type:String}
});

mongoose.model=("admins",schema)
