const mongoose=require("mongoose");

const addressSchema = new mongoose.Schema({ 
    city:{type:String,
        required:true},
        streetName:{type:String,
        required:true},
        buildingNumber:{type:Number,
        required:true},
     });

    module.exports=mongoose.model("addresses",addressSchema)