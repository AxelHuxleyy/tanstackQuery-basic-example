const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Users', dataSchema);
