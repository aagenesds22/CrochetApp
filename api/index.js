const app = require('./src/app.js');
const http = require('http');
const dbConnect = require('./db.js');
require('dotenv').config();
/* const assert = require('assert'); */






const server = http.createServer(app);
server.listen(3033, ()=> {
    console.log('listening');
    
})

