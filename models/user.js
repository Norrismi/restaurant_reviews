const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../config/config").get(process.env.NODE_ENV);

const SALT_I = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    //unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    maxlength: 100
  },
  lastname: {
    type: String,
    maxlength: 100
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

//pre = pre-save, before we save everything
userSchema.pre("save", function(next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };