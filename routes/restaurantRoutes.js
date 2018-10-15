// // const express = require("express");
// // const mongoose = require("mongoose");
// // const app = express();



// mongoose.Promise = global.Promise;
// mongoose.connect(config.DATABASE, {useNewUrlParser: true});

// const {Restaurant} = require('../models/restaurant')


// //GET
// app.get("/api/getRestaurant", (req, res) => {
//     let id = req.query.id;
  
//     Restaurant.findbyId(id, (err, doc) => {
//       if (err) return res.status(400).send(err);
//       res.send(doc);
//     });
//   });
  
//   app.get("/api/getRestaurant", (req, res) => {
//     let skip = parseInt(req.query.skip);
//     let limit = parseInt(req.query.limit);
//     let order = req.query.order;
  
//     Restaurant.find()
//       .skip(skip)
//       .sort({ _id: order })
//       .limit(limit)
//       .exec((err, doc) => {
//         if (err) return res.status(400).send(err);
//         res.send(doc);
//       });
//   });
  
//   //POST
//   app.post("/api/restaurant", (req, res) => {
//     const restaurant = new Restaurant(req.body);
  
//     Restaurant.save((err, doc) => {
//       if (err) return res.status(400).send(console.log(err));
//       res.status(200).json({
//         post: true,
//         restaurantId: doc._id
//       });
//     });
//   });
  
//   //UPDATE
//   app.post("/api/restaurant_update", (req, res) => {
//     Restaurant.findByIdAndUpdate(
//       req.body._id,
//       req.body,
//       { new: true },
//       (err, doc) => {
//         if (err) return res.status(400).send(err);
//         res.json({
//           sucess: true,
//           doc
//         });
//       }
//     );
//   });
  
//   //DELETE
//   app.delete("/api/delete_restaurant", (req, res) => {
//     let id = req.query.id;
  
//     Restaurant.findByIdAndRemove(id, (err, doc) => {
//       if (err) return res.status(400).send(err);
//       res.json(true);
//     });
//   });