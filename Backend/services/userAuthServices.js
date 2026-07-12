const Mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const checkUserExists = async (email) => {
  const user = await User.findOne({ email });
  return !!user;
};

const registerUserInDB = async (userData) => {
  const userExists = await checkUserExists(userData.email);
  if (userExists) {
    throw new Error("User with this email already exists");
  }

  const user = await new User(userData).save();
  return user;
};

const displayUsersInDB = async () => {
  const users = await User.find();
  return users;
};

//verify user login details and return user data if valid
const loginUserInDB = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid username or password");
  }
  return user;
};

module.exports = {
  registerUserInDB,
  displayUsersInDB,
  loginUserInDB,
  checkUserExists,
};
