const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
  a : {
    demand: true,
    alisa: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help','h').argv;

request({
  url: 'http://maps.google.com/maps/api/geocode/json?address=1273%20lakeside%20dr%20ca',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response, undefined, 2));
  console.log(`address: ${body.results[0].formatted_address}`);
  console.log(`lat: ${body.results[0].geometry.location.lat}`);
  console.log(`lng: ${body.results[0].geometry.location.lng}`);

})
