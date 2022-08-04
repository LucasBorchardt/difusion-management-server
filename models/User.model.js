const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      trim: true,      
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    }
  },
);

const User = model("User", userSchema);
module.exports = User;
