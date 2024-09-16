const mongoose = require("mongoose");

const productSchmea = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true },
  type: { type: String, enum: ["trial", "professional"] },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user who left the review
      comment: { type: String, required: true }, // Review comment
      rating: { type: Number, required: true, min: 1, max: 5 }, // Rating value (1-5 scale)
    },
  ],
});

const Products = new mongoose.model("Product", productSchmea);

module.exports = Products;
