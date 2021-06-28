const dotenv = require('dotenv');
dotenv.config();
const {
    DB_URL, 
    USER_DB, 
    PASS_DB, 
    DB_NAME,
    CLUSTER} = process.env;

const moongose = require('mongoose');

console.log(USER_DB, '\n', PASS_DB, '\n', DB_NAME)
const url = `mongodb+srv://${USER_DB}:${PASS_DB}@${CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

/* `mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.8wdbs.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`; */

const dbConnect = moongose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=> console.log('database OK'), (err)=> console.log('No database running', err));
 
module.exports = dbConnect