const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys")//.get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(cookieParser());

require("./routes/restaurantRoutes")(app);
require("./routes/userRoutes")(app);


//heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
