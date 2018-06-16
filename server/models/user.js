const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  linkedinId: { type: String, required: true, unique: true },
  linkedinUrl: { type: String, required: true },
  school: { type: String },
  verified: { type: Boolean, default: false },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

userSchema.statics.findOrCreate = function (props) {
  const {
    name, email, linkedinId, linkedinUrl,
  } = props;
  const self = this;
  return self.findOne({ linkedinId }).exec().then((user) => {
    if (user) return user;
    return self.create({
      name,
      email,
      linkedinId,
      linkedinUrl,
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
