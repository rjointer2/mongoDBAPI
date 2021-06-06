
// Models

const Thoughts = require('../../models/thought');

// helperFunctions

module.exports = {
    thoughts: () => {
        
        return Thoughts.find().then(result => result.map(thought => {
            console.log(thought)
            return {
                ...thought._doc,
                _id: thought.id,
                createdBy: thought.createdBy,
                reactions: thought.reactions,
                createdAt: thought.createdAt,
                reactionBody: thought.reactionBody
            }
        }))

    },
    createThought: async input => {
        
        try {
            console.log('test')
            console.log(input.thoughtInput.thoughtText)
            const thought = new Thoughts({
                thoughtText: input.thoughtInput.thoughtText,
                createdBy: input.thoughtInput.createdBy,
                createdAt: new Date().toDateString().slice(0, 10),
                reactionsBody: "[]"
            })

            return thought.save().then(result => {
                return {
                    ...result._doc,
                    _id: result.id,
                    createdAt: result.createdAt,
                    createdBy: result.createdBy,
                    reactions: result.reactions,
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