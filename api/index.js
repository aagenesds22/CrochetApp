const app = require('./src/app.js');
const http = require('http');
const dbConnect = require('./db.js');
require('dotenv').config();
/* const assert = require('assert'); */
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphQL/graphQLcontroller');
const resolvers = require('./src/graphQL/resolvers');
const models = require('./src/models/index');



const apolloStartUp = (async ()=> {

    try {

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: (req, res) => ({
                req,
                res,
                ...models,
            })
        })

        await server.start();
        server.applyMiddleware({app})

        const serverHTTP = http.createServer(app);

        serverHTTP.listen(3033, ()=> {
        console.log('listening');
    
        })

        console.log('*************\n', 'APOLLO SERVER RUNNING AT', serverHTTP.address().port,'\n','************')

    }catch(err) {

        throw new Error(err)

    }
})();




