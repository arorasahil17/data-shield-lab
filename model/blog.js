const { Schema, model } = require("mongoose");

const blogSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: String, default: Date.now().toString() },
  image: { type: String, required: true },
});

const Blogs = new model("Blogs", blogSchema);

module.exports = Blogs;
