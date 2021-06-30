const { gql } = require('apollo-server-express');


const typeDefs = gql`

    type Query {
        getProducts: [Product]
    }

    type Product {
        _id: ID!,
        name: String!,
        description: String!,
        price: Int!,
        currency: String!
        poctures: [String!],

    }

    input NewProduct {
        name: String!,
        description: String!,
        pictures: [String!],
        price: Int!,
        currency: String!,   
    }

    input UpdateProducts {
        ids: [ID!],
        fields: [[[String!]]],
        values: [[[String!]]],
    }

    type Mutation {
        addProduct(product: NewProduct): Product
        updateProduct(products: UpdateProducts): [Product]
    }

`
module.exports = typeDefs;