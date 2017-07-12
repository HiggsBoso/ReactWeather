var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div>
      <p>It's {temp} in {city}</p>
    </div>
  )
};


module.exports = WeatherMessage;
