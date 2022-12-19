const React = require('react');

class Show extends React.Component {
  render() {
    const { vegetables } = this.props;
    //Show OUT OF STOCK if remaining produce is 0
    const showForm = () => {
      if (vegetables.inventory > 0) {
        return (
          <div>
            <h4>{vegetables.inventory} remaining</h4>

            <form
              action={`/vegetables/buy/${vegetables.id}?_method=PUT`}
              method='POST'
            >
              <input className='buy' type='submit' value=' BUY ' />
            </form>
          </div>
        );
      } else {
        return <h3 className='stock'>OUT OF STOCK</h3>;
      }
    };

    return (
      <div className='body'>
        <link rel='stylesheet' type='text/css' href='../show.css' />
        <div className='container'>
          <header>
            <nav>
              <form
                action={`/vegetables/${vegetables._id}?_method=DELETE`}
                method='POST'
              >
                <input className='del' type='submit' value='DELETE' />
              </form>

              <a href='/vegetables/new'>ADD NEW VEGETABLES</a>

              <a href='/vegetables'>RETURN TO SHOP</a>

              <a href={`/vegetables/${vegetables._id}/edit`}>EDIT</a>
            </nav>
          </header>
          <div className='show'>
            <h4>
              {vegetables.name[0].toUpperCase() + vegetables.name.slice(1)}
            </h4>
            <img src={vegetables.img}></img>
            <h4>Fresh from the farm</h4>
            <br />
            <h4>{vegetables.price} / lb</h4>
            <br />
            {showForm()}
          </div>
        </div>
      </div>
    );
  }
}
module.exports = Show;
