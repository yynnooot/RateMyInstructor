const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  title:    {type: String, required: true},
  // urlTitle: {type: String},
  // content:  {type: String, required: true},
  // status:   {type: String, enum: statuses},
  // date:     {type: Date, default: Date.now },
  author:   {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
