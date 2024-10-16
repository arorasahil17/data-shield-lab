const express = require("express");
const router = express.Router();
const {
  registerUser,
  verifyOtp,
  logout,
  loginUser,
  checkAuth,
  updateProfile,
  sendMessage,
  resendOtp,
  getUsers,
  updateUserData,
} = require("../controller/user");

router
  .post("/register", registerUser)
  .post("/login", loginUser)
  .post("/resend/otp", resendOtp)
  .post("/auth", checkAuth)
  .put("/update/profile/:id", updateProfile)
  .post("/verify/otp", verifyOtp)
  .post("/logout", logout)
  .post("/send/messsage", sendMessage)
  .get("/get/users", getUsers)
  .post("/update/user/:id", updateUserData);

module.exports = router;
