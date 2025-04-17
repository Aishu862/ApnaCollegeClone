const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,  // ✅ Prevent duplicate emails
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false,
  }  
}, {
  timestamps: true  // ✅ Automatically adds createdAt & updatedAt fields
});

module.exports = mongoose.model('User', userSchema);
