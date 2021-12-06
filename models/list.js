// require Mongoose libreary
const mongoose = require('mongoose');

// Schema For Task
const listSchema = new mongoose.Schema({
    description: { // Description
        type: String,
        required: true
    },
    category: {    // Category
        type: String,
        required: true
    },
    date: {        // Date
        type: Date,
        required: true
    }
})


const List = mongoose.model('List', listSchema);

// Exporting 
module.exports = List;