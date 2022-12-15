const React = require('react');

const myStyle = {
  backgroundColor: '#ffcbcb',
  alignItems: 'center',
  width: '450px',
  height: '600px',
  position: 'relative',
};

const imgStyle = {
  height: '300px',
  // position: 'absolute',
  alignItems: 'center',
};

class Show extends React.Component {
  render() {
    const { vegetables } = this.props;
    const showForm = () => {
      if (vegetables.inventory > 0) {
        return (
          <div>
            <button>{vegetables.inventory} remaining</button>

            <form
              action={`/vegetables/buy/${vegetables.id}?_method=PUT`}
              method='POST'
            >
              <input type='submit' value=' BUY ' />
            </form>
          </div>
        );
      } else {
        return <button>OUT OF STOCK</button>;
      }
    };

    return (
      <div style={myStyle}>
        <h2>{vegetables.name[0].toUpperCase() + vegetables.name.slice(1)}</h2>
        <img src={vegetables.img} style={imgStyle}></img>
        <br />
        <button>{vegetables.price} / lb</button>
        <br />

        {showForm()}
        <br />

        <a href={`/vegetables/${vegetables._id}/edit`}>EDIT</a>
        <br />

        <form
          action={`/vegetables/${vegetables._id}?_method=DELETE`}
          method='POST'
        >
          <input type='submit' value='DELETE' />
        </form>
        <br />
        <nav>
          <a href='/vegetables'>Return To Vegetables</a>
        </nav>
      </div>
    );
  }
}
module.exports = Show;
