const request = require('request');


var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    if (error){
      callback("Unable to connect to Google servers.");
      // console.log("Unable to connect to Google servers.");
    } else if (body.status === 'ZERO_RESULTS'){
      // console.log("Unable to find that address.");
      callback("Unable to find that address.");
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
      // console.log(`address: ${body.results[0].formatted_address}`);
      // console.log(`lat: ${body.results[0].geometry.location.lat}`);
      // console.log(`lng: ${body.results[0].geometry.location.lng}`);
    }

  });
}

module.exports.geocodeAddress = geocodeAddress;
