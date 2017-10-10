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

fetchGeolocation(userInput)
  .then(geolocationData => {
    var { formattedAddress, lat, lng } = geolocationData;

    /*
      invoke fetchWeather and have its returning object accessible via weatherData in
      next .then method
    */

    return fetchWeather(lat, lng, formattedAddress);
  })
  .then(weatherData => {
    const { formattedLocation } = weatherData;
    const { summary, temperature } = weatherData.currentWeather;
    console.log(`
      Location: ${formattedLocation}
      Condition: ${summary}
      Temperature: ${temperature.toFixed(1)} degrees fahrenheit
      `);
  })
  .catch(() => {
    console.log(
      'Sorry, unable to fetch weather for that location. Please try again.'
    );
  });
