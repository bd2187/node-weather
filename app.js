const request = require('request');
const argv = require('yargs').options('a', {
  alias: 'address',
  demandOption: true,
  type: 'string'
}).argv;

// userInput will be desired location from user
// Sample input: "node app.js -a 'los angeles' "
const userInput = argv.a;

// replace white space with "%20"
const encodedAddress = encodeURIComponent(userInput);

const geolocationEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

request({ url: geolocationEndpoint, json: true }, function(err, res, body) {
  /*
    if err isn't null and no results are found, return object with data. Otherwise, return string with message
  */
  if (!err && body.results.length !== 0) {
    const formattedAddress = body.results[0].formatted_address;
    const { lat, lng } = body.results[0].geometry.location;

    return {
      formattedAddress,
      lat,
      lng
    };
  } else {
    return 'Unable to determine location';
  }
});
