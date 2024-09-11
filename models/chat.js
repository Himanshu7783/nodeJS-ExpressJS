const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        required: true,

    }, 
    to:{
        type: String
    },

     msg:{
        type: String,
        maxLenght:50
     },
     created_at:{
        type:Date
     }
});

 const Chat = mongoose.model("chat", chatSchema);

 module.exports=Chat;
