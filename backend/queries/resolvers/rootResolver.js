
// this is have all the resolvers imported and 
// combined into one resolver

// import resolvers

const userResolver = require('./usersResolver');

// merge the resolver in a rootResolver

const rootResolver = {
    ...userResolver,
}

// export the root resolver into the server
// where the rootValue proptery is the 
// root resolver

module.exports = rootResolver