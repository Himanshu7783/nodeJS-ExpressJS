const express = require("express");
const app = express();

let port = 8080;

 app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
 });
   
//  app.use((req, res) =>{
//     console.log("new incoming request");
     
//    //   res.send({
//    //      name : "apple",
        
//    //      color: "red"

//    //   })

//    let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>orange</li></ul>";
//    res.send(code);
//  });

        // routings

         app.get("/apple", (req, res) => {
            res.send("you contacted apple path");
         });

         app.get("/orange", (req, res) => {
            res.send("you contacted orange path");
         });

         app.get("*", (req, res) => {
            res.send("you contacted apple path");
         });

         app.post("/", (req, res) => {
            res.send("you contacted apple path");
         });

      console.log("Himanshu yadav");
