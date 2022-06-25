const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    _id:{
        type:mongoose.Types.ObjectId
    },

   cityName:{
    type:String,
    requierd:true

   },
// you need sure
   units:{type:[{type:mongoose.Types.ObjectId,
                  ref:"units"}],
          requierd:true,
   }

})



mongoose.model("cities",schema)