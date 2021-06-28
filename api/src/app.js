const app = require('express')();
const {json} = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');


app.use(morgan('dev'));
app.use(json({
    strict: false,
}))


app.use('/', routes)



module.exports = app;





