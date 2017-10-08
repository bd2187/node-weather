const request = require('request');
const argv = require('yargs').options('a', {
  alias: 'address',
  demandOption: true,
  type: 'string'
}).argv;

// userInput will be desired location from user
// Sample input: "node app.js -a 'los angeles' "
const userInput = argv.a;

console.log(userInput);
