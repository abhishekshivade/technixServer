const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  epicCode: String,
  principalName: String,
  role: String,
  email: String,
  contactNumber: String,
  isActive: {type: Boolean, default: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
