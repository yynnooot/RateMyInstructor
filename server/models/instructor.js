const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  school: {type: String, required: true}
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
