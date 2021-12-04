// require the mongoose library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/to_do_list_db');

// aquire the connection
const db = mongoose.connection;

// error handling
db.on('error', console.error.bind(console, 'error while connecting to database'));

// if connection is succesfull and running
db.once('open', function () {
    console.log('succesfuly connected to the database');
})