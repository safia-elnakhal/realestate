const mongoose = require("mongoose");
//some proptery lose
const schema = new mongoose.Schema({

    _id: {
        type: mongoose.Types.ObjectId
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        requierd: true
    },
    adminId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
    },
    question: {
        type: String,
        requierd: true
    },
    answer: {
        type: String,
    }


}, { timestamps: true });

mongoose.model("helpquestions", schema)