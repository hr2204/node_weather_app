const yargs = require('yargs');
const request = require('request');
const geocode = require('./geocode/geocode');

const argv = yargs.options({
  a : {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});


// b2a688b32c78efd16da4974c59258b87
// https://api.darksky.net/forecast/b2a688b32c78efd16da4974c59258b87/37.3895297,-122.0183914

request({
  url: 'https://api.darksky.net/forecast/b2a688b32c78efd16da4974c59258b87/37.3895297,-122.0183914',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response, undefined, 2));
  // if (error) {
  //   console.log("Unable to connect Forecast.io server");
  // } else if (response.statusCode === 400) {
  //   console.log("Unable to fetch weather");
  // } else if (response.statusCode === 200) {
  //   console.log(body.currently.temperature);
  // }

  if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
  } else {
      console.log("Unable to fetch weather");
  }
    // console.log(`address: ${body.results[0].formatted_address}`);
    // console.log(`lat: ${body.results[0].geometry.location.lat}`);
    // console.log(`lng: ${body.results[0].geometry.location.lng}`);


});
