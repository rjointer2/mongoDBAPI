
// Models

const User = require('../../models/user');

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
            thoughts: 
        }
    }

}

const 