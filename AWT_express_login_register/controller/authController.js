const User = require('../Models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Controller for registering a user
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controller for logging in a user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).send('Invalid credentials');
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
      res.redirect('/dashboard');
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  register,
  login
};
