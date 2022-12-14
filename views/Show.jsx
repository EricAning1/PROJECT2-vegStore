const React = require('react');

class Show extends React.Component {
  render() {
    const { vegetables } = this.props;

    return (
      <div>
        <h2>{vegetables.name}</h2>
        <img src={vegetables.img}></img>
        <nav>
          <a href='/vegetables'>Return To Vegetables Index</a>
        </nav>
      </div>
    );
  }
}
module.exports = Show;
