
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
    },
    thoughts: {
        type: Boolean,
        ref: 'Thoughts'
    },
    friends: {
        type: String,
        ref: 'User'
    }
});

module.exports = mongoose.model('User', userSchema);