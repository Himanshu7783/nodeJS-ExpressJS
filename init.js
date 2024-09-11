const mongoose = require("mongoose");
const Chat =require("./models/chat.js");



main()
  .then(() =>{
    console.log("connection successful");
  })
    .catch((err) =>console.log(err));
    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");

    };


    let allchats = [
        {
            from:"Neha",
            to: " preeti",
            msg: "send me notes fro the exam",
            created_at: new Date(),
        },
       
        {
            from:"Simaron",
            to: "himanshu",
            msg: "Dreamm......?",
            created_at: new Date(),
        },

        {
            from:"Amrish",
            to: " Anupriya",
            msg: "fear love",
            created_at: new Date(),
        },
        {
            from:"Ajay",
            to: "pinki",
            msg: "Bachhapan ka pyar",
            created_at: new Date(),
        },

        {
            from:"Pawan",
            to: "Pragya",
            msg: "True love",
            created_at: new Date(),
        },
        

    ]  

    Chat.insertMany(allchats);


