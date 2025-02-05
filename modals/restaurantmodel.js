const mongoose = require("mongoose");

// Food Schema
const foodSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  dishPic: { type: String },
  price: { type: Number, required: true }
});

// Restaurant Schema
const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Restaurant title is required"],
    },
    imageUrl: {
      type: String,
    },
    foods: [foodSchema], // Define foods as an array of objects
    time: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: { type: String },
    coords: {
      id: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
      address: { type: String },
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
