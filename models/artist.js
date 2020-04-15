const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // birthdate: Date,
}, {
  timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);