const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
    },
    password: {
        type: String,
        requires: true,
        minLength: 6
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;