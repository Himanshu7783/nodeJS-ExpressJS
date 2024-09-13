const mongoose =require("mongoose");

main()
.then(() =>{
    console.log("connection successful");

})
.catch((err) =>console.log(err));

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const booksSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },

    author:{
        type:String,
    },

    price:{
        type:Number,
    },
     discount:{
        type:Number,
        default: 0,
        
     },
       category:{
        type: String,
        enum:["fiction", "non-fiction"]
       },
        genre:["String"]
});

 const Book =mongoose.model("Book", booksSchema);

   Book.findByIdAndUpdate(
    "66c9885d48ea61a53ba70aec",
    {price: -100},
    {runValidators: true}
   )
   .then((res) =>{
    console.log(res);
   })
   .catch((err) =>{
    console.log(err);
   })
 
//  let book1 = new Book({
//     title:"Marvel  Comics season 2",
//     // author: "R.K. John",
//     price: 2600,
//     // category: "fiction",
//     genre:["comics", "superhero", "fiction"],

//  });

//  book1
//  .save()
//  .then((res) =>{
//     console.log(res);
//  })
//  .catch((err) =>{
//     console.log(err);
//  });
