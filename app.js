const request = require('request');
const { fetchGeolocation } = require('./geolocation');

const argv = require('yargs').options('a', {
  alias: 'address',
  demandOption: true,
  type: 'string'
}).argv;

// userInput will be desired location from user
// Sample input: "node app.js -a 'los angeles' "
const userInput = argv.a;

// const weatherEndpoint = `https://api.darksky.net/forecast/d14636997ecce0a069945c6e9a537d43/${lat},${lng}`;

fetchGeolocation(userInput, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('asdf', data);
  }
});
