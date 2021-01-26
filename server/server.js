require("dotenv").config();
const express = require("express");

const db = require('./db');
const app = express();

//get all restaurants
app.get("/restaurants", async (req, res) => {
    try{
       const {rows} = await db.query('SELECT * FROM restaurants');
       res.status(200).json({
            data: {
               restaurants: rows
            }
       });
    }catch (e) {
       console.log(e);
    }
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