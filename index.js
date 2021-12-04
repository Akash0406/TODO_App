const express = require('express');
const port = 3000;
const app = express();
const path = require('path')

const db = require('./config/mongoose')
const List = require('./models/list')

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/', function (req, res) {
    List.find({}, function (err, list) {
        if (err) {
            console.log(`Error while fetching list From DB`);
        }
    })
})

app.listen(port, function (err) {
    if (err) {
        console.log(`ERROR: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})