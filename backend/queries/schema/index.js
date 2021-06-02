
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    schema: {
        query: RootQuery
        mutation: RootMutation
    }

    type RootQuery {
        users: [Users!]!
        thoughts: [Thoughts!]!
        reactions: [Reactions!]!
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

    type: Reaction {
        _id: ID!
        reactionBody: String!
        createdBy: User!
        reactions: String!
    }



    input UserInput {
        _id: ID!
        username: String!
        email: String!
        friends: String!
    }

    input Thought {
        thoughtText: String!
        reactions: String!
    }

    input Reaction {
        reactionBody: String!
        createdBy: String!
        createdAt: String!
    }



    type RootMutation {
        createUser(userInput: UserInput): User
        deleteUser(userInput: UserInput): User
        updateUser(userInput: UserInput): User
        addFriendToUser(userInput: UserInput): User
        removeFriendFromUser(userInput: UserInput): User
        createThought(thoughtInput: ThoughtInput): Thought
        removeThought(thoughtInput: ThoughtInput): Thought
        createReaction(reactionInput: ReactionInput): Reaction
        removeReaction(reactionInput: ReactionInput): Reaction
    }

`)