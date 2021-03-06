var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?city=Moscow'>Moscow, Russia</Link>
        </li>
        <li>
          <Link to='/?city=Paris'>Paris, France</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
