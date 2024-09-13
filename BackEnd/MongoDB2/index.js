const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat =require("./models/chat.js");
const methodOverride = require("method-override");

 app.use(express.static(path.join(__dirname, "public")));
 app.use(express.urlencoded({extended:true}));// req.body ke liye requist form
 app.use(methodOverride("_method")); 


main()
  .then(() =>{
    console.log("connection successful");
  })
    .catch((err) =>console.log(err));
    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");

    }

      //Index Route 
      app.get("/chats", async(req, res) =>{
        let chats =  await Chat.find();
        console.log(chats);
        res.render("index.ejs", {chats});
      })
       
        //new route

        app.get("/chats/new", (req, res) =>{
          res.render("new.ejs")
        })
        
         // creat Route
          app.post("/chats", (req, res ) =>{
            let{from, to, msg}=req.body;
            let newChat =new Chat({
              from:from,
              to:to,
              msg:msg,
              created_at:new Date(),
            });
            newChat
            .save()
            .then((res) =>{
              console.log("chat was saved");

            }).catch((err) =>{
              console.log(err);
            })
            res.redirect("/chats");
          });

          //Edit  Route 
          app.get("/chats/:id/edit", async (req, res) =>{
            let {id} =req.params;
            let chat =  await Chat.findById(id);
            res.render("edit.ejs", {chat}); 
          })

           //update Route
           app.put("/chats/:id", async (req , res) =>{
            let{ id } = req.params;
            let{msg: newMsg} = req.body;
            console.log(newMsg);
            let updatedChat = await Chat.findByIdAndUpdate(
              id,
              {msg: newMsg},
              {runValidators:true, new: true}
            );
              console.log(updatedChat);
              res.redirect("/chats");
           });

           // destroy Route 
            app.delete("/chats/:id", async(req, res) =>{
              let{id} =req.params;
              let deletedChat =await Chat.findByIdAndDelete(id);
              console.log(deletedChat);
              res.redirect("/chats");

            });




     let chat1 = new Chat({
        from:"Amrish",
        to:"anupriya",
        msg:"Bye Amrish......?",
        created_at:new Date()
     }); 

     chat1.save().then((res) =>{
        console.log(res);
     })
        

      app.set("views", path.join(__dirname, "views"));
      app.set("view engine", "ejs");

      app.get("/", (req, res) =>{
        res.send("working root");
      });

        app.listen(8080, () =>{
            console.log("app is listening");
        });