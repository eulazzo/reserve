import User from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  const { username, password, email, phone, city, country } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      phone,
      city,
      country,
    });
    await newUser.save();
    res.status(201).send("User has been created!");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Username and password doesn't Match"));

    const { password, isAdmin, ...userDataWithNoPassword } = user._doc;

    res.status(201).json(userDataWithNoPassword);
  } catch (error) {
    next(error);
  }
};
