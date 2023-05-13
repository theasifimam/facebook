import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    dob: String,
    gender: String,
    friends: [],
    followings: [],
    followers: [],
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", userSchema);
export default userModel;
