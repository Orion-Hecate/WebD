const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    const cityName = req.body.cityName;
    const apiKey = 'd0ab8f6f745d4686734f4d60f0dc84d0';
    const unit = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=' + unit;

    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

            res.write('<h1>The temperature in ' + cityName + 'is ' + temp + ' degrees Celsius.</h1>');
            res.write('<p>The weather is currently ' + weatherDesc + '.</p>');
            res.write('<img src=' + imageUrl + '>');
            res.send();
        });     
    });
});

app.listen(3000, () => console.log('The Server is running on port 3000.'));
