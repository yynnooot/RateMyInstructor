const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new mongoose.Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  instructors: [{type: Schema.Types.ObjectId, ref: 'Instructor'}]
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
