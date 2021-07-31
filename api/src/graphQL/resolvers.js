const { ApolloError } = require("apollo-server-errors");

// ------------------------ MUTATIONS ------------------------
const { productMutations } = require('./mutations/product.js');


// ------------------------- QUERIES --------------------------

const { productQueries } = require('./queries/product.js')

module.exports = {

    Query: {
        ...productQueries,
    },
    Mutation: {
        ...productMutations,
    }
}