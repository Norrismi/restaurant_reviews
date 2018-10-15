const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    review: {
      type: String,
      default: "n/a"
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    ownerId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = { Restaurant };
