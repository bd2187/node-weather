const { fetchGeolocation } = require('./geolocation');

const argv = require('yargs').options('a', {
  alias: 'address',
  demandOption: true,
  type: 'string'
}).argv;

// userInput will be desired location from user
// Sample input: "node app.js -a 'los angeles' "
const userInput = argv.a;

fetchGeolocation(userInput, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
