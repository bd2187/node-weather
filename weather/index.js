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
      /*
        if no error is present and status code is 200, run callback with null as value for
        err variable and current temperature object as value for weather response
      */
      if (!err && res.statusCode === 200) {
        return cb(null, body.currently);
      } else {
        return cb('Sorry, unable to determine weather for your location', null);
      }
    }
  );
}

module.exports = { fetchWeather };
