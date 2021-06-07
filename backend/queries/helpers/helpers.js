
// Models

const User = require('../../models/user');
const Thought = require('../../models/thought');
const Reaction = require('../../models/reaction');

/* 

    resolver helper 
    it will return a object with the user's properties
    we want to bind the thought properties's value with
    the user's thought so when we query the thought
    we return the user's thoughts

*/

const getUserByID = async userID => {

    // we will store the user in constatnt and
    // retuurn a object with the queries properies we want

    const user = await User.findById(userID);

    try {
        return {
            ...user,
            _id: user.id,
            username: user.username,
            email: user.email,
            friends: user.friends,
            // helper function here from the thought helper
            thoughts: getThoughtsByUsername.bind(this, user.thoughts)
        }
    } catch(err) {
        throw err
    }

}

const getThoughtsByUsername = async user => {

    //  this will passed into the getUserbyID function
    // so we will have to get the thought by the id
    const thought = await Thought.findOne({
        createdBy: user.createdBy
    });

    try {
        return {
            ...thought,
            _id: thought.id,
            thoughtText: thought.thoughtText,
            createdBy: thought.createdBy,
            createdAt: thought.createdAt
        }
    } catch (err) {
        throw err
    }

}

const getReactionByCreatedBy = async user => {

    const reaction = await Reaction.findOne({
        createdBy: user.createdBy
    })
    console.log(user)

    try {
        return {
            ...reaction._doc, 
            reactionBody: reaction.reactionBody,
            createdBy: reaction.createdBy,
            createdAt: reaction.createdAt
        }
    } catch (err) {
        throw err
    }


}

module.exports = {
    getUserByID,
    getThoughtsByUsername,
    getReactionByCreatedBy
}