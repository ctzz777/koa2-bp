const mongoose = require('mongoose');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const User = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

User.methods.generateToken = function () {
  const user = this;
  return jwt.sign({ _id: user._id }, config.jwtKey, { expiresIn: 10 });
};

module.exports = mongoose.model('User', User, 'User');