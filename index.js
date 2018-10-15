const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/config").get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE,{ useNewUrlParser: true })


app.use(bodyParser.json());
app.use(cookieParser());


require('./routes/restaurantRoutes')(app)
require('./routes/userRoutes')(app)




const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
