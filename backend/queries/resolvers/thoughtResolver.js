
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
                reactions: thought.reactions
            }
        }))

    },
    createThought: async input => {
        
        try {
            console.log(input.singleInput.thoughtText)
            const thought = new Thoughts({
                thoughtText: input.singleInput.thoughtText,
                createdBy: input.singleInput.createdBy,
                createdAt: new Date().toDateString().slice(0, 10),
                reactions: "[]"
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