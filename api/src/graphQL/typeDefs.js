const { gql } = require('apollo-server-express');


const typeDefs = gql`

    type Query {
        getProducts: [Product]
    }

    type Product {

    }

    type Mutation {

    
    }
    
`
