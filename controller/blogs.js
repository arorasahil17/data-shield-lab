const Blogs = require("../model/blog");

const createBlog = async (req, res) => {
  const { title, description, category } = req.body;
  const { filename } = req.file;

  try {
    const blog = new Blogs({
      title,
      description,
      category,
      createdAt: Date.now().toString(),
      image: filename,
    });

    const savedBlog = await blog.save();
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: savedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const fetchAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const fetchBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createBlog, fetchAllBlogs, fetchBlog, deleteBlog };
