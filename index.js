// require Express
const express = require('express');
const port = 3000; // Port
const path = require('path'); // Path

// Require and Connect with Mongoose
const db = require('./config/mongoose')
const List = require('./models/list')


const app = express();
app.set('view engine', 'ejs'); // View Engine
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AGST', 'SEPT', 'OCT', 'NOV', 'DEC'];
app.get('/', function (req, res) {
    List.find({}, function (err, list) {
        if (err) {
            console.log(`Error while fetching list From DB`);
            return;
        }
        return res.render('home', {
            title: 'To-Do List',
            to_do_list: list,
            Month: month
        });
    })
})


app.post('/create-task', function (req, res) {
    // console.log(req.body.description);
    // console.log(req.body.category);
    // console.log(req.body.date);
    // console.log(req.body);
    // contactList.push(req.body);
    List.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTask) {
        if (err) {
            console.log('ERROR');
            return;
        }
        console.log('***********', newTask);
        return res.redirect('back');
    })
})


// Delete Task
app.get('/delete-task/', function (req, res) {
    // get the id from Query in the url
    let id = req.query.id;
    console.log(id);
    // find the contact in the database using id and delete
    List.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    })
})


app.listen(port, function (err) {
    if (err) {
        console.log(`ERROR: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})