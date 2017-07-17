var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleNewCity: function (city) {
    this.setState({
      isLoading: true
    });

    //var that = this;

    openWeatherMap.getTemp(city).then((temp) => {
      this.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({
        isLoading: false,
        temp: null,
        city: null
      });
      alert(errorMessage);
    });
  },
  render: function () {
    var {city, temp, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Retrieving data</h3>;
      } else if (temp && city) {
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
