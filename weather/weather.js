const request = require('request');


var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b2a688b32c78efd16da4974c59258b87/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    if (error) {
      callback("Unable to connect Forecast.io server");
    } else if (response.statusCode === 400) {
      callbcak("Unable to fetch weather");
    } else if (response.statusCode === 200) {
      callback( undefined, {
        temperature:body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

    // if (!error && response.statusCode === 200) {
    //     console.log(body.currently.temperature);
    // } else {
    //     console.log("Unable to fetch weather");
    // }
      // console.log(`address: ${body.results[0].formatted_address}`);
      // console.log(`lat: ${body.results[0].geometry.location.lat}`);
      // console.log(`lng: ${body.results[0].geometry.location.lng}`);


  });
};

module.exports.getWeather = getWeather;
