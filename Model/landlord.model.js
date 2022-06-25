const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    _id:{
        type:mongoose.Types.ObjectId
    },
landlordUnits:{type:[{type:mongoose.Types.ObjectId,
    ref:"units"}],
requierd:true,
}


})
mongoose.model=("loanlords",schema)