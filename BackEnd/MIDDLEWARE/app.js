const express =require("express");
const app =express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) =>{
    
//     console.log("HI, I am 1st middleware");
//    next();
// })

// app.use((req, res, next) =>{
    
//     console.log("HI, I am  2nd middleware");
//    next();
// })


//app.use
app.use("/random", (req, res, next) =>{
    console.log("I am only for random");
    next();
})

//  app.use("/api", (req,  res, next) =>{
//     let{token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//       res.send("ACCESS DENIED!")
//  });

//  app.get("/api", (req, res) =>{
//     res.send("data");
//  })
 
const checkTocken = (req,  res, next) =>{
    let{token} = req.query;
    if(token === "giveaway"){
        next();
    }
    //   res.send("ACCESS DENIED!")

    throw new ExpressError(401, "ACCESS DENIED!");
 };

 app.get("/api", checkTocken, (req, res) =>{
    res.send("data");
 })
//   Utility Middleware ^

// app.use((req, res, next) =>{
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// }) 

app.get("/", (req, res) =>{
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) =>{
    res.send("this is a random page");
})

app.get("/err", (req, res) =>{
    abcd = abcd;
})

//HANDLING ERRORS

app.get("/admin", (req, res) =>{
    throw new ExpressError(403, "Access to admin is forbidden");
})

 app.use((err, req, res, next) =>{
    let{status=500, message="Some Error Occurred"} =err;
   
   res.status(status).send(message);
 });

//  app.use((err, req, res, next) =>{
//     console.log("--------ERROR 2--------");
//     next(err);
//   });
  
//  //404
//  app.use((req, res) =>{
//     res.send("page not found");
//  })

 app.listen(8080, () =>{
    console.log("server listening to port 8080")
 })