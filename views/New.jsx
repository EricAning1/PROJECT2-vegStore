const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Vegetables</h1>
        <form action='/vegetables' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          Image: <input type='text' name='img' />
          <br />
          Inventory: <input type='text' name='inventory' />
          <br />
          Price: <input type='string' name='price' />
          <br />
          <input type='submit' name='' value='Create Vegetables' />
        </form>
      </div>
    );
  }
}

module.exports = New;
