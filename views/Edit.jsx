const React = require('react');
const DefaultLayout = require('./Default.jsx');

const container = {
  backgroundColor: '#ffd3b6',
  height: '82vh',
  width: '60vw',
  textAlign: 'center',
  marginLeft: '250px',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.4)',
  padding: '30px',
  color: '#777',
  position: 'relative',
};

const form = {
  width: '45vw',
  height: '50vh',
  alignSelf: 'center',
  padding: '10px',
  marginLeft: '80px auto',
  fontWeight: '700',
  backgroundColor: 'rgba(250, 235, 215, 0.8)',
  left: '14%',
  bottom: '10%',
  top: '25%',
  fontSize: '20px',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  position: 'absolute',
};

const input = {
  margin: '20px',
  width: '300px',
  height: '20px',
  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
  borderWidth: '0',
};

const submit = {
  height: '30px',
  fontSize: '25px',
  color: '#777',
  fontWeight: '600',
  textTransform: 'uppercase',
};

const nav = {
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#777',
  fontWeight: '600',
};

class Edit extends React.Component {
  render() {
    return (
      <div style={container}>
        <nav style={nav}>
          <a style={nav} className='home' href='/'>
            HOME
          </a>
          <a style={nav} className='index' href='/vegetables'>
            VEGETABLES INDEX
          </a>
          <a style={nav} href='/vegetables/new'>
            NEW
          </a>
        </nav>
        <DefaultLayout title='Edit Page'>
          <form
            style={form}
            action={`/vegetables/${this.props.vegetables._id}?_method=PUT`}
            method='POST'
          >
            <div>
              Name:
              <input
                style={input}
                type='text'
                name='name'
                defaultValue={this.props.vegetables.name}
              />
              <br />
              Inventory:
              <input
                style={input}
                type='number'
                name='inventory'
                defaultValue={this.props.vegetables.inventory}
              />
              <br />
              Image:
              <input
                style={input}
                type='text'
                name='img'
                defaultValue={this.props.vegetables.img}
              />
              <br />
              Price:
              <input
                style={input}
                type='text'
                name='price'
                defaultValue={this.props.vegetables.price}
              />
              <br />
              <input style={submit} type='submit' value='Submit Changes' />
            </div>
          </form>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Edit;
