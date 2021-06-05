
// Models 

const Users = require('../../models/user');
const Thoughts = require('../../models/thought');

// helper functions

const getThoughtsByID = require('../helpers/helpers').getThoughtsByID;

module.exports = {

    //get all users 

    users: async () => {
        
        try {
            // first we will
            return Users.find().then(users => users.map(user => {
                console.log(user)
                return {
                    ...user._doc,
                    _id: user.id,
                    thoughts: getThoughtsByID.bind(this, user.username),
                    friends: user.friends
                }
            }))
        } catch(err) {
            console.log(err)
        }

    },
    createUser: (input) => {
        // we can create a new instance of the user model
        // save the result
        const user = new Users({
            username: input.userInput.username,
            email: input.userInput.email,
            friends: "[]",
            thoughts: "[]"
            /* 
                these will be empty for the 
                friends and thoughts
             */
        })

        // save this instance of the user and 
        // return the results

        return user.save().then(result => {
            return {
                ...result._doc,
                _id: result.id,
                email: result.email,
                thoughts: result.thoughts
            }
        })

    },
    deleteUser: input => {
        return Users.findOneAndDelete({
            username: input.friendInput.username
        }).then(() => {
            return "deleted"
        })
    },
    addFriendToUser: async input => {
        // the arg is the a string 

        try {
            // first find the user by the id then
            // push the friend in the array

            const user = await Users.findOne({
                username: input.friendInput.username
            });

            const friendsArray = JSON.parse(user.friends);
            friendsArray.push(input.friendInput.friend);
            const stringedFriend = JSON.stringify(friendsArray)
            
            user.friends = stringedFriend
            await user.save()

            return {
                ...user._doc,
                username: user.username,
                friends: user.friends
            }

                  

        } catch(err) {
            throw err
        }
    },
    updateUser: async input => {
        // pass in string and the string will 
        // determine the output of the properties 
        // updates

        console.log(input.updateInput.key)

        const filter = { username: input.updateInput.key }

        if(input.updateInput.property === "username") {
            const update = { username: input.updateInput.newProperty }

            let updatedProperty = await Users.findOneAndUpdate(filter, update);
            await updatedProperty.save()

            console.log(updatedProperty)

            return {
                ...updatedProperty,
                _id:  updatedProperty.id,
                email:  updatedProperty.email,
                friends: updatedProperty.friends,
                thoughts: updatedProperty.thoughts
            }

        }

        console.log('passed?')

        if(input.updateInput.property === "email") {
            const update = { email: input.updateInput.newProperty }
            console.log(update)

            let updatedProperty = await Users.findOneAndUpdate(filter, update);
            await updatedProperty.save()

            console.log(updatedProperty)
            
            return {
                ...updatedProperty,
                _id:  updatedProperty.id,
                email:  updatedProperty.email,
                friends: updatedProperty.friends,
                thoughts: updatedProperty.thoughts
            }
        }
        
    },
    removeFriendToUser: () => {

    },
    createReaction: () => {

    },
    removeReaction: () => {
        
    }

}