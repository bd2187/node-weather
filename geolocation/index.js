const request = require('request');
const fetch = require('node-fetch');

function fetchGeolocation(address) {
  // replace white space with "%20"
  const encodedAddress = encodeURIComponent(address);

  const geolocationEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  return fetch(geolocationEndpoint)
    .then(res => {
      return res.json(); // convert data to json object
    })
    .then(jsonData => {
      // parse json object and return new object with specific key value pairs
      const formattedAddress = jsonData.results[0].formatted_address;
      const { lat, lng } = jsonData.results[0].geometry.location;

      return {
        lat,
        lng,
        formattedAddress
      };
    })
    .catch(err => {
      return 'Unable to determine location';
    });
}

module.exports = {
  fetchGeolocation
};
