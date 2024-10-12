const router = require("express").Router();
const {
  createBlog,
  fetchAllBlogs,
  fetchBlog,
  deleteBlog,
} = require("../controller/blogs");
const upload = require("../middleware/uploadImage");

router
  .post("/create/blog", upload.single("image"), createBlog)
  .get("/blogs", fetchAllBlogs)
  .get("/blogs/:id", fetchBlog)
  .delete("/blogs/:id", deleteBlog);

module.exports = router;
