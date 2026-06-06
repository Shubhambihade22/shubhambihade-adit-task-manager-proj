const User = require("../models/User");
const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({
    email,
  });

  if (userExists) {
    return res
      .status(400)
      .json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User Registered",
    user,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (
    user &&
    (await bcrypt.compare(
      password,
      user.password
    ))
  ) {
    res.json({
      token: generateToken(user._id),

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res
      .status(401)
      .json({ message: "User not found. Please register for login." });
  }
};

module.exports = {
  registerUser,
  loginUser,
};