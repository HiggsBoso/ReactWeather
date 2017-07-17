var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the About page. You can find some useful links below:</p>
      <ol>
        <li>
          <a href="https://openweathermap.org/" target="__blank">Open Weather Map page</a>
        </li>
        <li>
          <a href="https://facebook.github.io/react/" target="__blank">App is built on React</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
