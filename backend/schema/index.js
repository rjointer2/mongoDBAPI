
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    schema: {
        query: RootQuery
        mutation: RootMutation
    }

    type: User {
        _id: ID!
        username: String!
        email: String!
        friends: String!
        thoughts: [Thoughts!]
    }

    type: Thought {
        _id: ID!
        thoughtText: String!
        createdBy: User!
        reactions: String!
        createdAt: String!
    }

    type: {
        _id: ID!
        reactionBidy: String!
        createdBy: User!
        reactions: String!
    }

    type RootQuery {
        users: [Users!]!
        thoughts: [Thoughts!]!
        reactions: [Reactions!]!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
        deleteUser(userInput: UserInput): User
        updateUser(userInput: UserInput): User
        addFriendToUser(userInput: UserInput): User
        removeFriendFromUser(userInput: UserInput): User
        createThought(thoughtInput)
    }

`)