const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav>
          <a className='home' href='/'>
            HOME
          </a>
          <a className='index' href='/vegetables'>
            RETURN TO VEGETABLES
          </a>
        </nav>

        <link rel='stylesheet' type='text/css' href='../new.css' />
        <h2>NEW VEGETABLES</h2>
        <form action='/vegetables' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          Image: <input type='text' name='img' />
          <br />
          Inventory: <input type='text' name='inventory' />
          <br />
          Price: <input type='string' name='price' />
          <br />
          <input
            className='create'
            type='submit'
            name=''
            value='Create Vegetables'
          />
        </form>
      </div>
    );
  }
}

module.exports = New;
