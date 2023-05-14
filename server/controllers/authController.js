import userModel from "../models/users.model.js";
import bcrypt from "bcrypt";

// Registering New User
export const registerUser = async (req, res) => {
  const { fname, lname, username, password, email, isAdmin, dob, gender } =
    req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    fname,
    lname,
    username,
    password: hashedPassword,
    email,
    isAdmin,
    dob,
    gender,
  });

  try {
    await newUser.save();
    res.status(201).json({
      user: newUser,
      success: true,
      message: "User registered successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message, success: false });
  }
};
