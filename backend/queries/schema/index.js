
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    schema {
        query: RootQuery
        mutation: RootMutation
    }

    type RootQuery {
        users: [User!]!
        thoughts: [Thought!]!
        reactionBody: [Reaction!]!
    }


    type User {
        _id: ID!
        username: String!
        email: String!
        friends: String!
        thoughts: Thought
    }

    type Thought {
        _id: ID
        thoughtText: String
        createdBy: String
        reactionBody: Reaction
        createdAt: String
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdBy: String
    }



    input UpdateInput {
        key: String!
        property: String!
        newProperty: String!
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
    }

    input FriendInput {
        username: String!
        friend: String!
    }

    input SingleInput { 
        input: String!
    }

    input DoubleInput {
        username: String!
        friend: String!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
        deleteUser(singleInput: SingleInput): User
        updateUser(updateInput: UpdateInput): User
        addFriendToUser(friendInput: FriendInput): User
        removeFriendFromUser(doubleInput: DoubleInput): User
        createThought(thoughtInput: ThoughtInput): Thought
        removeThought(singleInput: SingleInput): Thought
        createReaction(reactionInput: ReactionInput): Reaction
        removeReaction(singleInput: SingleInput): Reaction
    }

`)