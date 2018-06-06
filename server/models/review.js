const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  status: {type: String, enum: ['pending','approved'], default: 'pending'},
  date: {type: Date, default: Date.now },
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  instructor: {type: Schema.Types.ObjectId, ref: 'Instructor'}
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
