const { fetchGeolocation } = require('./geolocation');
const { fetchWeather } = require('.//weather');

const argv = require('yargs').options('a', {
  alias: 'address',
  demandOption: true,
  type: 'string'
}).argv;

// userInput will be desired location from user
// Sample input: "node app.js -a 'los angeles' "
const userInput = argv.a;

fetchGeolocation(userInput).then(data => console.log(data));

// fetchGeolocation(userInput, (err, geolocationResponse) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const { formattedAddress, lat, lng } = geolocationResponse;
//
//     fetchWeather(lat, lng, (err, weatherResponse) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const { summary, temperature } = weatherResponse;
//         console.log(`
//           Location: ${formattedAddress}
//           Current Temp: ${temperature.toFixed(1)} degrees fahrenheit
//           Condition: ${summary}
//           `);
//       }
//     });
//   }
// });
