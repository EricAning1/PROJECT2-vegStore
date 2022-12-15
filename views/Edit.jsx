const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title='Edit Page'>
        <form
          action={`/vegetables/${this.props.vegetables._id}?_method=PUT`}
          method='POST'
        >
          Name:
          <input
            type='text'
            name='name'
            defaultValue={this.props.vegetables.name}
          />
          <br />
          Inventory:
          <input
            type='number'
            name='inventory'
            defaultValue={this.props.vegetables.inventory}
          />
          <br />
          Image:
          <input
            type='text'
            name='img'
            defaultValue={this.props.vegetables.img}
          />
          <br />
          Price:
          <input
            type='text'
            name='price'
            defaultValue={this.props.vegetables.price}
          />
          <br />
          <input type='submit' value='Submit Changes' />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
