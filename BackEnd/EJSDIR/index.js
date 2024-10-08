const express = require("express");
const app = express();
const path = require("path");


 const port = 8080;
 app.set("view engine", "ejs");
 app.set("views", path.join(__dirname, "/views"));
  

 app.get("/", (req, res) =>{
//    res.send("this is home");
    res.render("home.ejs");
 })

   app.get("/hello", (req, res) =>{
    res.send("hello");
   });

   app.get("/ig/:username", (req, res) =>{
    // const followers = ["aman", "Ajay", "Amrish", "Samuel"];
    // let {username} =req.params;
    //  res.render("instagram.ejs", {username, followers})
     let{username} = req.params;
     const instaData = require("./data.json");
     const data=instaData[username];
     console.log(data);
     console.log(instaData);
     res.render("instagram.ejs", {data: instaData[username]});

   });

     app.get("/rolldice", (req, res) =>{
        let diceVal= Math.floor(Math.random()*6)+1;
        res.render("rolldice.ejs", {diceVal});
     })

 app.listen(port, () =>{
    console.log(`listening on port ${port}`);
 });