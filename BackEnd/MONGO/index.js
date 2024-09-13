const mongoose =require("mongoose");

main()
.then(() =>{
    console.log("connection successful");

})
.catch((err) =>console.log(err));

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

  const UserSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
  })
   
  const User = mongoose.model("User", UserSchema);
//   const Employee = mongoose.model("Employee", UserSchema);
  
User.findByIdAndDelete("66c84f518a96e5d65f54bcd4").then((res)=>{
    console.log(res);
})

// User.updateMany({age: {$gt:40}}, {age: 45})
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })


// User.find({age: {$gt: 40}})
// .then((res) =>{
//     console.log(res);
// })
//  .catch((err)=>{
//     console.log(err);
//  });



//  User.insertMany([
//     {name: "Tony", email: "tony@yahoo.com", age: 45},
//     {name: "Bruce", email: "Bruce@yahoo.com", age: 35},
//     {name: "peter", email: "peter@yahoo.com", age: 25},
//  ]).then((res) =>{
//     console.log(res);
//  });

//   const user2= new User({
//     name:"Eve",
//     email:"Eve@yahoo.com",
//     age:58,
//   });

//       user2.save()
      
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err)=>{
//         console.log(err);
//       });