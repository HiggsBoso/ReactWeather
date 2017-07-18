var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal= require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleNewCity: function (city) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(city).then((temp) => {
      this.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, (e) => {
      debugger;
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var city = this.props.location.query.city;

    if (city && city.length > 0) {
      this.handleNewCity(city);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var city = newProps.location.query.city;

    if (city && city.length > 0) {
      this.handleNewCity(city);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {city, temp, isLoading, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Retrieving data</h3>;
      } else if (temp && city) {
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
