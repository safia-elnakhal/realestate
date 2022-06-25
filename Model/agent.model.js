const mongoose = require("mongoose");
//some proptery lose
const schema = new mongoose.Schema({

    _id: {
        type: mongoose.Types.ObjectId
    },

    //erorr===>see again
    agentUnits: {


        type: [
            {
                unitId: { type: mongoose.Types.ObjectId, ref: "units" },
                numberOfRenting: { type: Number }
            },
        ],

        requierd: true
    },

    favoriteUnits:[{
        type: mongoose.Types.ObjectId, ref: "units" ,
    }],

});

mongoose.model("agents", schema)