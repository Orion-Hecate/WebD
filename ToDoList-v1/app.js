const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/scripts/date.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.get('/', (req, res) => {
    res.render('list', {listTitle: date.day(), newListItems: items});
});

app.get('/work', (req, res) => {
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.post('/', (req, res) => {
    var newItem = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(newItem);
        res.redirect('/work');
    } else {
        items.push(newItem);
        res.redirect('/');    
    }
});

app.get('/about', (req, res) => res.render('about'));

app.listen(3000, () => console.log('Server is up and running on port 3000!'));
