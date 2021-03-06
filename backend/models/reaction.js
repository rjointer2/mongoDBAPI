
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        require: true,
        maxLength: 280,
    },
    createdBy: {
        type: String,
        ref: 'User'
    },
    createdAt: {
        type: String,
    }
});

module.exports = mongoose.model('Reaction', reactionSchema)