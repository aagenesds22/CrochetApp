const app = require('express')();
const {json} = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');


app.use(cors());

app.use(morgan('dev'));

app.use(json({
    strict: false,
}))

// only for testing
app.use('/', routes)

const apolloStartUp = (async ()=> {

    try {

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: (req, res) => ({
                req,
                res,
            })
        })

    }catch(err) {

        throw new Error(err)

    }
})



module.exports = app;





