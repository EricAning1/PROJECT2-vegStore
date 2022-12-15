const React = require('react');

class Show extends React.Component {
  render() {
    const { vegetables } = this.props;

    return (
      <div>
        <h2>{vegetables.name}</h2>
        <img src={vegetables.img}></img>
        <br />
        <button>{vegetables.price} / lb</button>
        <br />
        <button>{vegetables.inventory} remaining</button>
        <form
          action={`/vegetables/buy/${vegetables.id}?_method=PUT`}
          method='POST'
        >
          <input type='submit' value=' Buy ' />
        </form>
        <a href={`/vegetables/${vegetables._id}/edit`}>EDIT</a>
        <br />

        <form
          action={`/vegetables/${vegetables._id}?_method=DELETE`}
          method='POST'
        >
          <input type='submit' value='DELETE' />
        </form>
        <nav>
          <a href='/vegetables'>Return To Vegetables</a>
        </nav>
      </div>
    );
  }
}
module.exports = Show;
