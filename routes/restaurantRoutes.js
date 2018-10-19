const { Restaurant } = require("../models/restaurant");
const { User } = require("../models/user");

module.exports = app => {
  app.get("/api/getRestaurant", (req, res) => {
    let id = req.query.id;

    Restaurant.findById(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc);
    });
  });

  app.get("/api/getRestaurants", (req, res) => {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Restaurant.find()
      .skip(skip)
      .sort({ _id: order })
      .limit(limit)
      .exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
      });
  });

  app.get("/api/user_posts", (req, res) => {
    Restaurant.find({ ownerId: req.query.user }).exec((err, docs) => {
      if (err) return res.status(400).send(err);
      res.send(docs);
    });
  });

  app.post("/api/restaurant", (req, res) => {
    const restaurant = new Restaurant(req.body);

    restaurant.save((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        post: true,
        restaurantId: doc._id
      });
    });
  });

  app.get("/api/getReviewer", (req, res) => {
    let id = req.query.id;

    User.findById(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.send({
        name: doc.name,
        lastname: doc.lastname
      });
    });
  });

  app.post("/api/restaurant_update", (req, res) => {
    Restaurant.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true },
      (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
          sucess: true,
          doc
        });
      }
    );
  });

  app.delete("/api/delete_restaurant", (req, res) => {
    let id = req.query.id;

    Restaurant.findByIdAndRemove(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json(true);
    });
  });
};
