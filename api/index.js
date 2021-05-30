
const app = require('express')();
const http = require('http');
const moongose = require('mongoose');
require('dotenv').config();
const assert = require('assert');
const PASS = process.env.passwd;


const url = `mongodb://localhost:27017/`;


const server = http.createServer(app);
server.listen(3033, ()=> {
    console.log('listening');
    moongose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(()=> console.log('database OK'), ()=> console.log('No database running'));
})

