const { User } = require("../models/user");
const { auth } = require("../middleware/auth");
const { Restaurant } = require("../models/restaurant");

module.exports = app => {
  app.post("/api/register", (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) return res.json({success: false});
      res.status(200).json({
        success: true,
        user: doc
      });
    });
  });


  ///////////////////////
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

  app.post("/api/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user)
        return res.json({
          isAuth: false,
          message: "Auth failed, email not found"
        });

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            isAuth: false,
            message: "Wrong password"
          });
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res.cookie("auth", user.token).json({
            isAuth: true,
            id: user._id,
            email: user.email
          });
        });
      });
    });
  });

 

  app.get("/api/users", (req, res) => {
    User.find({}, (err, users) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(users);
    });
  });

  app.get("/api/logout", auth, (req, res) => {
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err)
        res.sendStatus(200)
    })
  });

  app.get('/api/auth', auth,(req,res)=>{
      res.json({
          isAuth:true,
          id: req.user._id,
          email:req.user.email,
          name:req.user.name,
          lastname:req.user.lastname
      })
  })











  app.post("/api/updateUser", (req, res) => {
    User.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true },
      (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
          success: true,
          doc
        });
      }
    );
  });

  app.delete("/api/removeUser", (req, res) => {
    let id = req.query.id;

    User.findByIdAndRemove(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json({ success: true, user: doc });
    });
  });
};
