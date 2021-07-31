const app = require('express')();
const {json} = require('express');
const morgan = require('morgan');
const cors = require('cors');


app.use(cors());

app.options('*', cors())

app.use(morgan('dev'));

app.use(json({
    strict: false,
}))




module.exports = app;





