const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/signup.html');
});

app.post('/', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname,
                }
            }
        ],
    };

    const jsonData = JSON.stringify(data);

    const apiKey = '06f7cd583588d955f72191e8b209f88f-us17';
    const listId = '47e37c29dc';

    const url = 'https://us17.api.mailchimp.com/3.0/lists/' + listId;
    const options = {
        method: 'POST',
        auth: 'orion:' + apiKey,
    };

    const request = https.request(url, options, (response) => {
        if (response.statusCode == 200) {
            res.sendFile(__dirname + '/pages/success.html');
        } else {
            res.sendFile(__dirname + '/pages/failure.html');
        }

        response.on('data', (data) => console.log(JSON.parse(data)));
    });  

    request.write(jsonData);
    request.end();
});

app.post('/failure', (req, res) => res.redirect('/'));

app.listen(process.env.PORT || 3000, () => console.log('Server is running on port 3000.'));
