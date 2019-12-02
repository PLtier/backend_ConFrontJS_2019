const mongoose = require('mongoose');
const db = require('./keys').mongoURI;
const dotenv = require("dotenv");
dotenv.config();

const connectDB = () => {
    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('conntected'))
        .catch(err => console.log(err));
    if (process.env.DB_MODE === 'development') {
        mongoose.set('debug', true);
    }
};
module.exports = connectDB;