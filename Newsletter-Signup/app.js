const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express()
app.use(bodyParser);



app.listen(3000, () => console.log('Server is running on port 3000.'));
