
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
        console.log(user);
        return {
            ...user,
            _id: user.id,
            username: user.username,
            email: user.email,
            friends: user.friends,
            // helper function here from the thought helper
            thoughts: getThoughtsByID.bind(this, user.thoughts)
        }
    } catch(err) {
        throw err
    }

}

const getThoughtsByID = async thoughtID => {

    //  this will passed into the getUserbyID function
    // so we will have to get the thought by the id
    const thought = await Thought.find({_id: {$in: { thoughtID } }});

    try {
        thought.map( thoughtItem => {
            return {
                ...thought,
                _id: thought.id,
                // here we will call the getUSerByID 
                // to get the id of who created the thought
                createdBy: getUserByID.bind(this, thought.createdBy),
                reactions: thoughtItem.reactions
            }
        })
    } catch (err) {
        throw err
    }

}