
const Users = require('../../models/user');

const getThoughtsByID = require('../helpers/helpers').getThoughtsByID;

module.exports = {

    //get all users 

    users: () => {
        // first we will
        return User.find().then(user => user.map(res => {
            console.log(user)
            return {
                ...user._doc,
                _id: user.id,
                thoughts: getThoughtsByID.bind(this, user.thoughts)
            }
        }))

    },
    createUser: (input) => {
        // we can create a new instance of the user model
        // save the result
        const user = new Users({
            username: input.userInput.username,
            email: input.userInput.email
            /* 
                these will be empty for the 
                friends and thoughts
             */
        })
    },
    deleteuser: userID => {
        return Users.findByIdAndDelete(userID)
    },
    addFriendsToUSer: async (userID, inputFriend) => {
        // the arg is the a string 

        // using the findOneand Update we can getthe 
        // document filtered 
        const user = Users.findOneAndUpdate(userID, )

    }

}