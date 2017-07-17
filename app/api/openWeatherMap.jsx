var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a1bd47854e32c2046b0bfe3b8c8dad19&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;


    return axios({
      method: 'GET',
      url: requestURL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res) {
      if (res.response.data.cod && res.response.data.message) {
        debugger;
        throw new Error(res.data.message);
      } else {
        debugger;
        return res.data.main.temp;
      }
    }, function (res) {
      debugger;
      throw new Error(res.response.data.message);
    });
  }
}
