const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  linkedinID: {type: String, required: true},
  school: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
