require("dotenv").config();
const express = require("express");

const app = express();

//get all restaurants
app.get("/restaurants",(req,res) =>{
   res.status(200).json({

   });
});
//get one restaurant
app.get("/restaurant/:restaurantid",(req,res) =>{
   //req.params
   res.status(200).json({

   });
});
//create restaurant
app.post("/restaurant",(req,res) =>{
   //req.body
   res.status(200).json({

   });
});
//update restaurant
app.put("/restaurant/:restaurantid",(req,res) =>{
   //req.body
   res.status(200).json({

   });
});
//delete restaurant
app.delete("/restaurant/:restaurantid",(req,res) =>{
   //req.body
   res.status(200).json({

   });
});

app.listen(process.env.PORT,() => {
   console.log("Server is running");
});