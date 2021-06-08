
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: String,
    },
    createdBy: {
        type: String,
        ref: 'User'
    },
    reactionBody: {
        type: Boolean,
        ref: 'Reactions'
    }
});

module.exports = mongoose.model('Thoughts', thoughtSchema)