const fetch = require('node-fetch');
const request = require('request');
const { API_KEY } = require('../config');

function fetchWeather(lat, lng, formattedLocation) {
  /*
      lat and lng will be determined by fetchGeolocation's result
  */
  const weatherEndpoint = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;

  return fetch(weatherEndpoint)
    .then(res => {
      return res.json();
    })
    .then(jsonData => {
      // assign currently property to new constant, 'currentWeather'
      const { currently: currentWeather } = jsonData;

      return { currentWeather, formattedLocation };
    })
    .catch(err => {
      return 'Unable to determine weather for your location';
    });
}

module.exports = { fetchWeather };
