
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        require: true,
        maxLength: 280
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: String,
    }
})