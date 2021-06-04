
// Modules 

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

// invoked app 

const PORT = process.env.PORT || 3000
const app = express();

// Graph Query Schema

const graphQLSchema = require('./queries/schema/index')
const graphQLResolvers = require('./queries/resolvers/rootResolver');

// middleware

app.use('/', graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}))

// routes

app.get('/', (req, res) => {
    res.json('hello world')
});

mongoose.connect(`mongodb+srv://${process.env.UN}:${process.env.PW}@classapi.rupow.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        app.listen(PORT, () => {
        console.log('Listening for request')
    })
    }).catch(err => {
        console.log('failed')
        console.log(err)
});

console.log(process.env.DB)