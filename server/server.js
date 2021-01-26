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
app.get("/restaurant/:restaurantid", async (req, res) => {
   try{
      const {id} = req.params;
      const {rows} = await db.query(`SELECT * FROM restaurants where id=${id}`);
      res.status(200).json({
         data: {
            restaurants: rows[0]
         }
      });
   }catch (e) {
      console.log(e);
   }
});
//create restaurant
app.post("/restaurant",async (req,res) =>{
   const {name,location,price_range} = req.body;
   try{
      const {rows} = await db.query(`INSERT INTO restaurants (name,location,price_range) values (${name},${location},${price_range}) returning *`);
      res.status(200).json({
         data: {
            restaurants: rows
         }
      });
   }catch (e) {
      console.log(e);
   }
});
//update restaurant
app.put("/restaurant/:restaurantid", async (req, res) => {
   const {name,location,price_range} = req.body;
   const {id} = req.params;
   try{
      const {rows} = await db.query('UPDATE restaurants SET name=$1, location=$2, price_range=$3 where id=$4 returning *',[name,location,price_range,id]);
      res.status(200).json({
         data: {
            restaurants: rows[0]
         }
      });
   }catch (e) {
      console.log(e);
   }
});
//delete restaurant
app.delete("/restaurant/:restaurantid",async (req, res) => {
   const {id} = req.params;
   try{
      const results = db.query('DELETE FROM restaurants where id=$1',[id]);
      res.status(204).json({
         data: {
            status: "success"
         }
      });
   }catch (e) {
      console.log(e);
   }
});

app.listen(process.env.PORT,() => {
   console.log("Server is running");
});