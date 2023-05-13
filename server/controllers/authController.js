import userModel from "../models/users.model.js";

// Registering New User
export const registerUser = async (req, res) => {
  const { fname, lname, username, password, email, isAdmin, dob, gender } =
    req.body;

  const newUser = new userModel({
    fname,
    lname,
    username,
    password,
    email,
    isAdmin,
    dob,
    gender,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser, { message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
