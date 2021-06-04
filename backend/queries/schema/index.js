
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    schema {
        query: RootQuery
        mutation: RootMutation
    }

    type RootQuery {
        users: [User!]!
        thoughts: [Thought!]!
        reactions: [Reaction!]!
    }


    type User {
        _id: ID!
        username: String!
        email: String!
        friends: String!
        thoughts: [Thought!]
    }

    type Thought {
        _id: ID!
        thoughtText: String!
        createdBy: String!
        reactions: String!
        createdAt: String!
    }

    type Reaction {
        _id: ID!
        reactionBody: String!
        createdBy: User!
        reactions: String!
    }



    input UserInput {
        username: String!
        email: String!
    }

    input ThoughtInput {
        thoughtText: String!
        createdBy: String!
    }

    input ReactionInput {
        reactionBody: String!
        createdBy: String!
        createdAt: String!
    }

    input FriendInput {
        username: String!
        friend: String!
    }



    type RootMutation {
        createUser(userInput: UserInput): User
        deleteUser(userInput: UserInput): User
        updateUser(userInput: UserInput): User
        addFriendToUser(friendInput: FriendInput): User
        removeFriendFromUser(friendInput: FriendInput): User
        createThought(thoughtInput: ThoughtInput): Thought
        removeThought(thoughtInput: ThoughtInput): Thought
        createReaction(reactionInput: ReactionInput): Reaction
        removeReaction(reactionInput: ReactionInput): Reaction
    }

`)