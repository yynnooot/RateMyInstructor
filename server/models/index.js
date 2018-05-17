const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  title:    {type: String, required: true},
  // urlTitle: {type: String},
  // content:  {type: String, required: true},
  // status:   {type: String, enum: statuses},
  // date:     {type: Date, default: Date.now },
  author:   {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});


const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  linkedinID: {type: String, required: true},
  school: {type: String, required: true}
});

const Review = mongoose.model('Review', reviewSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  User, 
  Review
}
