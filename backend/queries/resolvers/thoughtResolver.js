
// Models

const Thoughts = require('../../models/thought');

// helperFunctions

const getReactionByCreatedBy = require('../helpers/helpers').getReactionByCreatedBy;

module.exports = {
    thoughts: async () => {
        
        try {
            return Thoughts.find().then(result => result.map(thought => {
                return {
                    ...thought._doc,
                    _id: thought.id,
                    thoughtText: thought.thoughtText,
                    createdBy: thought.createdBy,
                    reactions: thought.reactions,
                    createdAt: thought.createdAt,
                    reactionBody: getReactionByCreatedBy.bind(this, thought)
                }
            }))
        } catch(err) {
            throw err
        }

    },
    createThought: async input => {
        
        try {
            console.log('test')
            console.log(input.thoughtInput.thoughtText)
            const thought = new Thoughts({
                thoughtText: input.thoughtInput.thoughtText,
                createdBy: input.thoughtInput.createdBy,
                createdAt: new Date().toDateString().slice(0, 10),
                reactionBody: false
            })

            return thought.save().then(result => {
                return {
                    ...result._doc,
                    _id: result.id,
                    createdAt: result.createdAt,
                    createdBy: result.createdBy,
                    reactionBody: result.reactionBody,
                }
            })
        } catch (err) {
            throw err
        }
    },
    removeThought: input => {
        return Thoughts.findOneAndDelete({
            username: input.singleInput.username
        })
    }
}