
const Reaction = require('../../models/reaction');

/* 

    the reactions are like replies so when the
    user gets the thoughts, they can see the 
    reaction and how did it

*/

module.exports = {

    // get all reactions

    // getReactionsInThought

    // createReaction
    createReaction: async input => {

        // create a new reaction instance 
        const reaction = new Reaction({
            reactionBody: input.reactionInput.reactionBody,
            createdBy: input.reactionInput.createdBy,
            createdAt: new Date().toDateString().slice(0, 10)
        })

        return reaction.save().then(result => {
            return {
                ...result._doc,
                _id: result.id,
                reactionBody: result.reactionBody,
                createdBy: result.createdBy,
                createdAt: result.createdAt
            }
        })

    }
}