const request = require('request');
const { API_KEY } = require('../config');

function fetchWeather(lat, lng) {
  const weatherEndpoint = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;

  request(
    {
      url: weatherEndpoint,
      json: true
    },
    (err, res, body) => {
      if (!err && res.statusCode === 200) {
        console.log(`body: ${JSON.stringify(body.currently, undefined, 2)}`);
      } else {
        console.log('Sorry, unable to determine weather for your location');
      }
    }
  );
}

module.exports = { fetchWeather };
