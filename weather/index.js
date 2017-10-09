const request = require('request');
const { API_KEY } = require('../config');

function fetchWeather(lat, lng, cb) {
  /*
    lat and lng will be determined by fetchGeolocation's result
  */
  const weatherEndpoint = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;

  request(
    {
      url: weatherEndpoint,
      json: true
    },
    (err, res, body) => {
      if (!err && res.statusCode === 200) {
        return cb(null, body.currently);
      } else {
        return cb('Sorry, unable to determine weather for your location', null);
      }
    }
  );
}

module.exports = { fetchWeather };
