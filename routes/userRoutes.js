const { User } = require("../models/user");

module.exports = app => {

app.get('/api/user', (req,res)=>{
    let id = req.query.id

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })
})


  app.post("/api/register", (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) return res.send("failed");
      res.status(200).json({
        success: true,
        user: doc
      });
    });
  });

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
