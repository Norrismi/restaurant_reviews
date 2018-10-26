const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/config").get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  config.DATABASE,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(cookieParser());

require("./routes/restaurantRoutes")(app);
require("./routes/userRoutes")(app);

//heroku
app.use(express.static("client/build"));

//heroku
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "./client", "build", "index.html"));
  });
}

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
